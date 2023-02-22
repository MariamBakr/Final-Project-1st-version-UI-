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
