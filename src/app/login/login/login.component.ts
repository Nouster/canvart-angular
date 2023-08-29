import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ilog } from 'src/app/models/ilog';
import { AuthenticationService } from 'src/app/service/Authentication/authentication.service';
import { TokenService } from 'src/app/service/Authentication/token.service';
import { UserService } from 'src/app/service/Canvart/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordError: string | null = null; // Add property for password error

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private token: TokenService,
    private toast: ToastrService,
    private userService: UserService
  ) {}

  onSubmit(credentials: Ilog): void {
    this.auth.login(credentials).subscribe(
      (data) => {
        this.token.saveToken(data.token);
        this.token.saveUserCredentials(credentials.username);
        this.userService.getUserData();
        this.toast.success('You are now logged in');
      },
      (error) => {
        if (error.status === 401) {
          this.toast.error('Invalid username or password');
        } else {
          this.toast.error('An error occured. Please try again later');
        }
        console.log(error);
      }
    );
  }
}
