import { CartService } from './../Services/cart.service';
import { WishlistService } from './../Services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  wishlistProducts:any
  constructor(private service:WishlistService, private cartService:CartService){}

  ngOnInit(): void {
    this.service.getAllForClient().subscribe((data)=>{
      this.wishlistProducts=data.data
    })
  }

  getAll(){
    this.service.getAllForClient().subscribe((data)=>{
      this.wishlistProducts=data.data
    })
  }

  addToCart(product:object){
    this.cartService.addToCart(product).subscribe((data)=>{
      console.log("product in cart")
    })
  }

  removeProduct(prodId:string){
    this.service.removeFromList(prodId).subscribe((data)=>{
      console.log(data)
      this.getAll()
    })
  }
}
