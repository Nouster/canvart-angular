import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ButtonEffectsDirective } from './button-effects.directive';

@NgModule({
  declarations: [BannerComponent, HomeComponent, ButtonEffectsDirective],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
