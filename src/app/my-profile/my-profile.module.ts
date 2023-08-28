import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [MyGalleryComponent],
  imports: [CommonModule, NgxTypedJsModule],
})
export class MyProfileModule {}
