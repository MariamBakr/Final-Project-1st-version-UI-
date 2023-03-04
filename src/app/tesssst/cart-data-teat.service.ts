import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartDataTeatService {
  // cartlist: Iproduct[]
  // cartsubject: BehaviorSubject<Iproduct[]>
  constructor() {
    // this.cartsubject = new BehaviorSubject<Iproduct[]>(this.locagetcart())
    // this.cartlist = this.locagetcart()
   }

// userList///
  userList: User[] = [
    {
      id_U: "D-95",
      name: "Doha",
      cart:[],
      order:{
        product: [],
        TOTAL: 0,
      }
      

    }, {
      id_U: "M-200",
      name: "Marwa",
      cart: [],
      order: {
        product: [],
        TOTAL:0,
      }
     
    }
     
  ]

// ProductList///
  ProductList: Iproduct[] = [
    {
      title: "A",
      images: "../../assets/wishlist_product_01.png",
      quantity: 10,
      price: 10,
      TOTAL: 0,
      _id: "A-122"
    }, {
      title: "B",
      images: "../../assets/wishlist_product_04.png",
      quantity: 15,
      price: 15,
      TOTAL: 0,
      _id: "B-133"
    },
    {
      title: "C",
      images: "../../assets/wishlist_product_02.png",
      quantity: 20,
      price: 20,
      TOTAL: 0,
      _id: "C-144"
    }, {
      title: "D",
      images: "../../assets/wishlist_product_03.png",
      quantity: 25,
      price: 25,
      TOTAL: 0,
      _id: "D-155"
    }
  ]
  


}





// interface
export interface Iproduct {
  
  title: string,
  images: string,
  quantity: number,
  price: number,
  TOTAL: number,
  _id: string
}


export interface Order {
  product: Iproduct [],
  TOTAL: number,
}

export interface User {
  id_U: string,
  name: string,
  order: Order,
  cart: Iproduct[]
 
}

// product: Iproduct[]