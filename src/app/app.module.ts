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
import { VendorHomepageComponent } from './vendor-homepage/vendor-homepage.component';
import { VendorSidebarComponent } from './vendor-sidebar/vendor-sidebar.component';
import { VendorJobproposalComponent } from './vendor-jobproposal/vendor-jobproposal.component';
import { JopdetailscardComponent } from './jopdetailscard/jopdetailscard.component';
import { CustomerpageForJobdetailsAndVendorsproposalsComponent } from './customerpage-for-jobdetails-and-vendorsproposals/customerpage-for-jobdetails-and-vendorsproposals.component';
import { VendorProposalSendToCustomerComponent } from './vendor-proposal-send-to-customer/vendor-proposal-send-to-customer.component';
import { VendorOrdersMarketComponent } from './vendor-orders-market/vendor-orders-market.component';
import { CustomerMonitorJobsComponent } from './customer-monitor-jobs/customer-monitor-jobs.component';

import { CustomerProfileComponent } from './customer-edit-profile/customer-profile.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorEditProfileComponent } from './vendor-edit-profile/vendor-edit-profile.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { CustomerTrackOrderComponent } from './customer-track-order/customer-track-order.component';
import { VendorFindJobComponent } from './vendor-find-job/vendor-find-job.component';
import { CustomerCreateCustomOrderComponent } from './customer-create-custom-order/customer-create-custom-order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyMarketPageComponent } from './my-market-page/my-market-page.component';
import { AddToMarketFormComponent } from './add-to-market-form/add-to-market-form.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';

import { HttpClientModule } from '@angular/common/http';


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
    VendorHomepageComponent,
    VendorSidebarComponent,
    VendorJobproposalComponent,
    JopdetailscardComponent,
    CustomerpageForJobdetailsAndVendorsproposalsComponent,
    VendorProposalSendToCustomerComponent,
    VendorOrdersMarketComponent,
    CustomerMonitorJobsComponent,

    CustomerProfileComponent,
    CustomerComponent,
    VendorEditProfileComponent,
    VendorProfileComponent,
    CustomerTrackOrderComponent,

    VendorFindJobComponent,
    CustomerCreateCustomOrderComponent,
    WishlistComponent,
    MyMarketPageComponent,
    AddToMarketFormComponent,
    LayoutHomeComponent,
    CustomerInfoComponent,
    VendorInfoComponent,


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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
