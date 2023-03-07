import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CUSTOM_ORDER_DETAILS_URL } from './../shared/constants/urls';
import {apiResults} from '../shared/models/apiResults'

@Injectable({
  providedIn: 'root'
})
export class CustomOrderService {

  constructor(private _HttpClient:HttpClient) { }

  getCustomOrderDetails_by_id(customOrderId:String){
    return this._HttpClient.get<apiResults>(CUSTOM_ORDER_DETAILS_URL+customOrderId);
  }
}
