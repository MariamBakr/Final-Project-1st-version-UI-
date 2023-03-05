import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { VendorProductsService } from '../Services/vendor-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {

  products: Products[] = [];
  constructor(private productsService: VendorProductsService, private router: Router,) {
    let productsObservable: Observable<Products[]>

    productsObservable = this.productsService.getAll()

    productsObservable.subscribe((serverProducts) => {
      this.products = serverProducts;
      console.log(this.products)
    })
  }


  view_details(id:string) {
    this.router.navigate(['/single-product', id ]);
  }
 


  // image_Product
  title = 'ng-carousel-demo';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        nav: true
      }
    },
    nav: true
  }

  slides = [
    { id: 1, img: "https://htmldemo.net/expert/expert/assets/images/product/23_6.webp" },
    { id: 2, img: "https://htmldemo.net/expert/expert/assets/images/cart/12_23.webp" },
    { id: 3, img: "https://htmldemo.net/expert/expert/assets/images/product/5_2.webp" },
    { id: 4, img: "https://htmldemo.net/expert/expert/assets/images/product/22_1.webp" }

  ];


  // Color_Product
  titlec = 'ng-carousel-demo';

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 5
      },
      740: {
        items: 5
      },
      940: {
        items: 5,
        nav: true
      }
    },
    nav: true
  }

  slides12 = [
    { id: 1, color: "#f85707" },
    { id: 2, color: "#f8f807" },
    { id: 3, color: "#33f807" },
    { id: 4, color: "#07e4f8" },
    { id: 3, color: "#1505f4" },
  ];




}
