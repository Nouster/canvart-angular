import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [BannerComponent, HomeComponent, FirstSectionComponent],
  imports: [CommonModule, NgxTypedJsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
