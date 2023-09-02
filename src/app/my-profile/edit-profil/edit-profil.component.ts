import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/service/Canvart/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css'],
})
export class EditProfilComponent implements OnInit {
  user!: IUser;
  editProfilForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [this.user?.lastName],
    email: [this.user?.email],
    gender: [this.user?.gender],
    password: [this.user?.password],
    birthDate: [this.user?.birthDate],
    address: this.fb.group({
      street: [this.user?.address.street],
      zipCode: [this.user?.address.zipCode],
      city: [this.user?.address.city],
      country: [this.user?.address.country],
    }),
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getUserData1().subscribe((user) => {
      this.user = user;
    });
  }

  submit() {
    if (this.editProfilForm.invalid) {
      this.toast.error('Please fill in all required fields.');
      return;
    }
    this.updateProfile();
  }

  updateProfile() {
    this.userService
      .editProfil(this.user!.id!, this.editProfilForm)
      .subscribe(() => {
        this.toast.success('Your profile has been updated');
      });
  }
}
