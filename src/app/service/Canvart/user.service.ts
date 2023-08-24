import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IUser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  connectedUser?: IUser;
  private baseUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  addUser(formData: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl, formData.getRawValue());
  }

  findUser(users: IUser[], email: string): IUser[] {
    return users.filter((user) => user.email === email);
  }

  getUserData(): Observable<IUser | undefined> {
    let email: string = localStorage['user_key'];
    return this.getAllUsers().pipe(
      map((response: any) => {
        const users = response['hydra:member'];
        const filteredUsers: IUser[] = this.findUser(users, email);
        this.connectedUser = filteredUsers[0];
        return this.connectedUser;
      }),
      catchError((error) => {
        console.error("Une erreur s'est produite : ", error);
        return of(undefined);
      })
    );
  }
}
