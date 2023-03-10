import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER_REGISTER_URL, USER_LOGIN_URL, USER_UPDATE_DATA_URL,VENDOR_CHECKOUT_PAYPAL_URL, CHECKOUT_URL } from './../shared/constants/urls';
import { Router } from '@angular/router';
import { Order } from '../tesssst/cart-data-teat.service';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CHECKService {

  constructor(private http: HttpClient) { }
  

  CHECK_PAYMENT(Data:any): Observable<any> {
    // console.log("--------------------------------")
    // console.log('Data:'+Data.lastName)
    return this.http.post<any>(CHECKOUT_URL, Data);
    // return this.http.get<any>('http://localhost:5000/vendor/products/empty')
    
  }

  CHECKOUT_PAYMENT(): Observable<any> {
    // console.log("--------------------------------")
    // console.log('Data:'+Data.lastName)
    return this.http.get<any>(VENDOR_CHECKOUT_PAYPAL_URL);
    // return this.http.get<any>('http://localhost:5000/vendor/products/empty')
    
  }

  

 


 


}
