import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from 'src/assets/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(category:object): Observable<Categories[]> {
    return this.http.post<Categories[]>('http://localhost:5000/categories/add',category);
  }
}
