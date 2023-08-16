import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule],
  exports: [DetailsComponent],
})
export class NftDetailsModule {}
