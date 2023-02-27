import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }

  searchProduct(name:string):Observable<Products[]> {

    return this.http.get<Products[]>(`http://localhost:5000/search?name=${name}`);
  }
}
