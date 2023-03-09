import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubCategories } from 'src/app/shared/models/subcategory';

import { Categories } from 'src/app/shared/models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategory(): Observable<Categories> {
    console.log(this.http.get<Categories>('http://localhost:5000/categories'))
    return this.http.get<Categories>('http://localhost:5000/categories')

  }
  getSubCategoryOfCategory(id:string): Observable<SubCategories> {
    console.log(this.http.get<Categories>(`http://localhost:5000/subcategories/cat/${id}`))
    return this.http.get<SubCategories>(`http://localhost:5000/subcategories/cat/${id}`)

  }
  getSubCategoryOfCategoryname(name:string): Observable<SubCategories> {
    console.log(name)
    //console.log(this.http.get<Categories>(`http://localhost:5000/subcategories/cat/${name}`))
    return this.http.get<SubCategories>(`http://localhost:5000/subcategories/${name}`)

  }

  addCategory(category:object): Observable<Categories> {
    console.log(category)
    return this.http.post<Categories>('http://localhost:5000/categories/add',category);
  }

  editCategory(category:object,id:string): Observable<Categories> {
    console.log(category)
    return this.http.put<Categories>(`http://localhost:5000/categories/${id}`,category);
  }


  deleteCategory(id:string): Observable<Categories> {
    console.log()
    return this.http.delete<Categories>(`http://localhost:5000/categories/${id}`);
  }
  getcategorybyid(id:string){
    return this.http.get(`http://localhost:5000/categories/pag/${id}`);

  }
  getsubcategorybyid(id:string){
    return this.http.get(`http://localhost:5000/subcategories/pag/${id}`);
  }

}
