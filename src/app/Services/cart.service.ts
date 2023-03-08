import { cartItem } from './../shared/models/cart';
import { CART, ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, EMPTY_CART } from './../shared/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { user } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  
  getAll(): Observable<cartItem[]> {
    return this.http.get<cartItem[]>(CART);
  }

  addToCart(product:object): Observable<string> {
    return this.http.post<string>(ADD_TO_CART,product);
  }

  deleteFromCart(id:string): Observable<cartItem[]>{
    return this.http.delete<cartItem[]>(DELETE_FROM_CART+'/'+id)
  }

  UpdateCart(quantity:number,id:string): Observable<string>{
    return this.http.put<string>(UPDATE_CART+'/'+id, {quantity:quantity})
  }

  emptyCart(): Observable<Products>{
    return this.http.get<Products>(EMPTY_CART)
  }
}
