import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';

@NgModule({
  declarations: [MyGalleryComponent, EditComponent, CreateNftComponent, EditProfilComponent],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
})
export class MyProfileModule {}
