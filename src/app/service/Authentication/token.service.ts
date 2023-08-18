import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly USER_KEY = 'user_key';
  constructor(private router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['/']);
  }

  saveUserCredentials(email: string): void {
    localStorage.setItem(this.USER_KEY, email);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
