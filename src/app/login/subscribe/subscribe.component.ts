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
    this.userService.addUser(this.subscribeForm).subscribe(
      () => {
        this.toast.success('User added successfully');
        this.router.navigate(['/login']);
      },
      (err) => {
        this.toast.error('Please verify informations');
        console.log(this.subscribeForm.getRawValue());
        console.log('error', err);
      }
    );
    console.log(localStorage);
  }
}
