import { CLIENT_ORDER_HISTORY_URL } from './../shared/constants/urls';
import { apiResults } from './../shared/models/apiResults';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersHistoryService {

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<any[]>{
    return this.http.get<any[]>(CLIENT_ORDER_HISTORY_URL)
  }

}
