import { CartService } from './../Services/cart.service';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { VendorProductsService } from '../Services/vendor-products.service';
import { Products } from '../shared/models/products';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title = 'ng-carousel-demo';

  products: Products[]=[];

  constructor(private productsService: VendorProductsService, private cartService: CartService){
    let productsObservable: Observable<Products[]>
 
    productsObservable = this.productsService.getAll()
 
    productsObservable.subscribe((serverProducts)=>{
      this.products = serverProducts;
    })
  }
 
  addToCart(product:object){
    console.log('clicked')
    let cartObservable: Observable<boolean>
    cartObservable=this.cartService.addToCart(product)
    cartObservable.subscribe((serverProducts)=>{
      console.log("product in cart")
    })
  }

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
    { id: 1, img: "https://dummyimage.com/350x150/423b42/fff" },
    { id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff" },
    { id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff" },
    { id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff" },
    { id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff" }
  ];
}
