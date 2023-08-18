import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ilog } from 'src/app/models/ilog';
import { AuthenticationService } from 'src/app/service/Authentication/authentication.service';
import { TokenService } from 'src/app/service/Authentication/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private token: TokenService
  ) {}

  onSubmit(credentials: Ilog): void {
    this.auth.login(credentials).subscribe(
      (data) => {
        this.token.saveToken(data.token);
        this.token.saveUserCredentials(credentials.username);
      },
      (err) => console.log(err)
    );
  }
}
