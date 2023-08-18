import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  consoleDisplay(a: string, b: string) {
    console.log(a, b);
  }
}
