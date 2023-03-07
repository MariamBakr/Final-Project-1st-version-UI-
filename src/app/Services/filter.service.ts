import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../shared/models/products';
import { Colors ,Vendors} from '../shared/models/colors';
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }

  searchProduct(name:string):Observable<Products[]> {

    return this.http.get<Products[]>(`http://localhost:5000/search/name/${name}`);
  }
  // /:id/:color/:vendid/:min/:max
  searchp(data:any):Observable<Products[]> {
    return this.http.post<Products[]>('http://localhost:5000/search/try',data);

  }
  searchProductbycat(id:string):Observable<Products[]> {

    return this.http.get<Products[]>(`http://localhost:5000/search/cat/${id}`);
  }
  searchProductbycolor(color:string):Observable<Products[]> {
     console.log(color)
    return this.http.get<Products[]>(`http://localhost:5000/search/n/${color}`);
  }

  searchProductwithin(min:any,max:any):Observable<Products[]> {

   return this.http.get<Products[]>(`http://localhost:5000/search/range/${min}/${max}`);
 }
 allvendors():Observable<Vendors[]> {

  return this.http.get<Vendors[]>(`http://localhost:5000/search/vendor`);
}
  lowestProduct(): Observable<Products[]> {

    return this.http.get<Products[]>(`http://localhost:5000/search/lowest`);
  }
  allColors(){

    return this.http.get(`http://localhost:5000/search/allcolors`);
  }
  allProduct() {

    return this.http.get(`http://localhost:5000/search/all`);
  }
  searchProductbyvendor(id:string): Observable<Products[]> {

    return this.http.get<Products[]>(`http://localhost:5000/search/v/${id}`);
  }
}
