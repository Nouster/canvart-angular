import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilog } from 'src/app/models/ilog';
import { Itoken } from 'src/app/models/itoken';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url: string = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient) {}

  login(credential: Ilog): Observable<Itoken> {
    return this.http.post<Itoken>(this.url, credential);
  }
}
