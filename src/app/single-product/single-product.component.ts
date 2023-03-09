import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../Services/cart.service';
import { VendorProductsService } from '../Services/vendor-products.service';
import { WishlistService } from '../Services/wishlist.service';
import { Products } from '../shared/models/products';
import { user } from '../shared/models/user';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit  {
  constructor(private activatedRoute: ActivatedRoute, private service: VendorProductsService, private cartService: CartService, private listService: WishlistService){}
  prdId:string='';
  prdoduct:Products|undefined
  
  ngOnInit(): void {
    this.prdId = String (this.activatedRoute.snapshot.paramMap.get("id"))
    let prd:Observable<Products>
    prd = this.service.getProductById(this.prdId)
    prd.subscribe((prod)=>{
      this.prdoduct = prod
      console.log('******' + this.prdoduct.colors)
    })   
  }

  addToCart(product: object) {
    console.log('clicked')
    console.log(product)
    this.cartService.addToCart(product).subscribe((data) => {
      console.log("product in cart")
    })}

  addToWishlist(product: object) {
    this.listService.addToList(product).subscribe((data) => {
      console.log(data)
    })
  }


}
