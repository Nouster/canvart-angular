import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/Canvart/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  subscribeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    gender: ['', Validators.required],
    password: ['', Validators.required],
    birthDate: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    }),
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router
  ) {}

  submit(): void {
    if (this.subscribeForm.invalid) {
      this.toast.error('Please fill in all required fields.');
      return;
    }
    this.userService.addUser(this.subscribeForm).subscribe(
      () => {
        this.toast.success('User added successfully');
        this.router.navigate(['/login']);
      },
      (err) => {
        if (
          err.error &&
          err.error.message &&
          err.error.message.includes('duplicate')
        )
          this.toast.error('Email already in use');
      }
    );
  }
}
