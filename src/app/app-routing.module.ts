import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetailsComponent } from './nft-details/details/details.component';
import { LoginComponent } from './login/login/login.component';
import { NftComponent } from './explore/nft/nft.component';
import { SubscribeComponent } from './login/subscribe/subscribe.component';
import { MyGalleryComponent } from './my-profile/my-gallery/my-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nftDetails/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'explore', component: NftComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'gallery', component: MyGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
