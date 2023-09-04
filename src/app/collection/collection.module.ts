import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class CollectionModule {}
