import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';
import { IUser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  connectedUser?: IUser;
  private baseUrl = 'http://127.0.0.1:8000/api/users';
  private UserSubject = new BehaviorSubject<IUser[] | undefined>(undefined);

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl).pipe();
  }

  addUser(formData: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl, formData.getRawValue());
  }

  findUser(users: IUser[], email: string): IUser[] {
    return users.filter((user) => user.email === email);
  }

  getUserData(): IUser {
    let email: string = localStorage['user_key'];
    this.getAllUsers().subscribe(
      (response: any) => {
        const users = response['hydra:member'];

        const filteredUsers: IUser[] = this.findUser(users, email);
        this.connectedUser = filteredUsers[0];
      },
      (error) => {
        console.error("Une erreur s'est produite : ", error);
      }
    );
    return this.connectedUser!;
  }

  getUserData1(): Observable<IUser> {
    let email: string = localStorage['user_key'];
    return this.getAllUsers().pipe(
      map((response: any) => {
        const users = response['hydra:member'];
        const filteredUsers: IUser[] = this.findUser(users, email);
        return filteredUsers[0];
      }),
      catchError((error) => {
        console.error("Une erreur s'est produite : ", error);
        return throwError(error);
      })
    );
  }

  editProfil(id: number, formData: FormGroup): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/merge-patch+json'
    );

    return this.http
      .patch<IUser>(`${this.baseUrl}/${id}`, formData, { headers })
      .pipe(
        tap(() => {
          const updatedUser = this.UserSubject.value?.map((user) =>
            user.id === id ? { ...user, ...formData } : user
          );
          this.UserSubject.next(updatedUser);
        })
      );
  }
}
