import { CART, ADD_TO_CART } from './../shared/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<boolean> {
    return this.http.get<boolean>(CART);
  }

  addToCart(product:object): Observable<boolean> {
    return this.http.post<boolean>(ADD_TO_CART,product);
  }

}
