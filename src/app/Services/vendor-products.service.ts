import { VENDOR_ADD_PRODUCT_URL, VENDOR_EDIT_PRODUCT_URL, VENDOR_DELETE_PRODUCT_URL, VENDOR_SEARCH_PRODUCT_URL, VENDOR_FILTER_PRODUCT_URL, VENDOR_PRODUCTS_URL, VENDOR_URL } from './../shared/constants/urls';
import { Products } from './../shared/models/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorProductsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Products[]> {
    return this.http.get<Products[]>(VENDOR_PRODUCTS_URL);
  }

  addProduct(product:object): Observable<string> {
    console.log(product)
    return this.http.post<string>(VENDOR_ADD_PRODUCT_URL,product);
  }

  getByVendorId():Observable<Products[]>{
    return this.http.get<Products[]>(VENDOR_URL)
  }

  /////////////////////////



  // deleteProduct(product:string): Observable<Products[]>{
  //   return this.http.delete<Products>(this.url+'/'+id);

  // searchProduct(): Observable<Products[]> {
  //   return this.http.get<Products[]>(VENDOR_SEARCH_PRODUCT_URL);
  // }

  // filterProduct(): Observable<Products[]> {
  //   return this.http.get<Products[]>(VENDOR_FILTER_PRODUCT_URL);
  // }
}
