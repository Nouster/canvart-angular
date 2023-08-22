import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  addUser(formData: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl, formData.getRawValue());
  }
}
