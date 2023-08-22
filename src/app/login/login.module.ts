import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent, SubscribeComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  exports: [LoginComponent, SubscribeComponent],
})
export class LoginModule {}
