import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingDealsComponent } from './trending-deals/trending-deals.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import * as _ from 'lodash';
import { ProductService } from './services/product.service';
import { HomeComponent } from './home/home.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerDashboardService } from './services/seller-dashboard.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SellerRegistrationService } from './services/seller-registration.service';
import { AuthenticationService } from './services/authentication.service';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { BuyerRegistrationComponent } from './buyer-registration/buyer-registration.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';

import { SellerDashboardInventoryComponent } from './seller-dashboard-inventory/seller-dashboard-inventory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShopperZoidMaterialModule } from '../material-module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';

import { BuyerRegistrationService } from './services/buyer-registration.service';
import { BuyerProfileService } from './services/buyer-profile.service';
import { SocialLoginService } from './services/social-login.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('622910296888-2ceemejp379mm4bdjv4don9f303lid8k.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('459182898138381')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [AppComponent, SearchBarComponent, TrendingDealsComponent, HomeComponent, SellerDashboardComponent, LoginPageComponent, SellerRegistrationComponent, BestDealsComponent, BuyerDashboardComponent, BuyerRegistrationComponent, SellerDashboardInventoryComponent, AddProductComponent, ProductDetailsComponent, UpdateProductComponent, BuyerProfileComponent, NavbarComponent, PageNotFoundComponent, FileUploadComponent],
  imports: [Ng2CarouselamosModule, BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule, ShopperZoidMaterialModule, SocialLoginModule],
  providers: [ProductService, SellerDashboardService, AuthenticationService, SellerRegistrationService, BuyerRegistrationService, BuyerProfileService,
   {
    provide: AuthServiceConfig,
    useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
