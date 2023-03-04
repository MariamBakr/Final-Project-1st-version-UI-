import { Products } from './../shared/models/products';
import { user } from './../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../Services/cart.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { cartItem } from '../shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  userCart:user[]=[];
  products:cartItem[]=[]

  constructor(private service:CartService, private router:Router){
    
    // let userObservable: Observable<user[]>
      this.service.getAll().subscribe((data)=>{
      // this.userCart=user;
      this.products=data;
      console.log(this.products)
   
  })
  }
  
  getAll(){
      // let userObservable: Observable<user[]>
      this.service.getAll().subscribe((data)=>{
        // this.userCart=user;
        this.products=data;
        console.log(data)
      })
  }

  delete(id:string){
    if(window.confirm("Are you sure you want to delete this product from your cart?")){
       this.service.deleteFromCart(id).subscribe((data)=>{
        this.products = data;
        this.getAll()
       },(err)=>{
        console.log(err)
       }
    )
    }
  }

  emptyCart(){
    if(window.confirm("Are you sure you want to empty your cart?")){
      this.service.emptyCart().subscribe((data)=>{
            this.getAll();
        })
      }
  }
  

  checkOut(){
    this.router.navigate(['/checkout']);
  }
  backToMarket(){
    this.router.navigate(['/home']);
  }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

increment(id:string,newQty:number){
  this.service.UpdateCart(++newQty,id).subscribe((data)=>{
    console.log(data)
    this.getAll()
  })
  
}

decrement(id:string,newQty:number){
  let num=--newQty;
  if(num > 1){
    this.service.UpdateCart(num,id).subscribe((data)=>{
      console.log(data)
      this.getAll()
    })
  }
}
}

