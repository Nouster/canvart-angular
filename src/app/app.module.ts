import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NftDetailsModule } from './nft-details/nft-details.module';
import { NgChartsModule } from 'ng2-charts';
import { LoginModule } from './login/login.module';
import { AuthorizationInterceptorProvider } from './interceptor/authorization.interceptor';
import { ExploreModule } from './explore/explore.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MyProfileModule } from './my-profile/my-profile.module';
import { FooterComponent } from './footer/footer.component';
import { CollectionModule } from './collection/collection.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    NftDetailsModule,
    NgChartsModule,
    LoginModule,
    ExploreModule,
    MyProfileModule,
    BrowserModule,
    CollectionModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [AuthorizationInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
