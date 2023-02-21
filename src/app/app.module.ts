import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RegisterComponent } from './register/register.component';
import { FilterComponent } from './filter/filter.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SingleProductComponent } from './single-product/single-product.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { HomePageCarouselComponent } from './home-page-carousel/home-page-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { CustomerProfileComponent } from './customer-edit-profile/customer-profile.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorEditProfileComponent } from './vendor-edit-profile/vendor-edit-profile.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { CustomerTrackOrderComponent } from './customer-track-order/customer-track-order.component';
import { VendorFindJobComponent } from './vendor-find-job/vendor-find-job.component';
import { CustomerCreateCustomOrderComponent } from './customer-create-custom-order/customer-create-custom-order.component';


@NgModule({
  declarations: [
    FilterComponent,
    RegisterComponent,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LatestNewsComponent,
    CounterComponent,
    CardComponent,
    CheckoutComponent,
    SingleProductComponent,
    PurchaseHistoryComponent,
    HomePageCarouselComponent,
    FooterComponent,
    HomepageComponent,
    NotfoundComponent,

    CustomerProfileComponent,
    CustomerComponent,
    VendorEditProfileComponent,
    VendorProfileComponent,
    CustomerTrackOrderComponent,

    VendorFindJobComponent,
    CustomerCreateCustomOrderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
