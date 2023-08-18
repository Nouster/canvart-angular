import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { FullSizeDirective } from '../directives/full-size.directive';

@NgModule({
  declarations: [DetailsComponent, FullSizeDirective],
  imports: [CommonModule],
  exports: [DetailsComponent],
})
export class NftDetailsModule {}
