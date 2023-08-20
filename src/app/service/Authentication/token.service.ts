import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly USER_KEY = 'user_key';
  logged: boolean = false;

  constructor(private router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveUserCredentials(email: string): void {
    localStorage.setItem(this.USER_KEY, email);
  }

  setIslogged(value: boolean): void {
    this.logged = value;
  }

  getIslogged(): boolean {
    return this.logged;
  }

  destroyToken() {
    localStorage.removeItem('token');
    localStorage.removeItem(this.USER_KEY);
    this.logged = false;
  }

  // isLogged(): boolean {
  //   return !!localStorage.getItem('token');
  // }
}
