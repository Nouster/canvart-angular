import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftComponent } from './nft/nft.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NftComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class ExploreModule {}
