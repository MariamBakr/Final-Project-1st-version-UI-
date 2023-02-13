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
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FilterComponent } from './filter/filter.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LatestNewsComponent,
    CounterComponent,
    RegisterComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSliderModule,
    FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
