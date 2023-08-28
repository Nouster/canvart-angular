import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MyGalleryComponent, EditComponent],
  imports: [CommonModule, NgxTypedJsModule],
})
export class MyProfileModule {}
