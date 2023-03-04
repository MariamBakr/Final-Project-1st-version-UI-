import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomOrder } from '../shared/models/customOrder';


@Injectable({
  providedIn: 'root'
})
export class CustomOrdersService {

  constructor(private http:HttpClient) { }
  addCustomOrder(customOrder:object): Observable<CustomOrder> {
    console.log(customOrder)
    return this.http.post<CustomOrder>('http://localhost:5000/custom',customOrder);
  }

}
