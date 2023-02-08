import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      840: {
        items: 2
      },
      940: {
        items: 2
      },
    },
  }
  
    slides = [
      {id: "1", img: "../assets/1.jpg", Daydate:"25", MonthDate:"/June",anchor:"START BRIGHT",text:"but in certain circumstances and owing to the claims of duty."},
      {id: "2", img: "../assets/2.jpg", Daydate:"25", MonthDate:"/June",anchor:"CLASSICALLY STYLISH",text:"At vero eos et accuasamus et iusto odio dignissimos ducimusn"},

    ];
}
