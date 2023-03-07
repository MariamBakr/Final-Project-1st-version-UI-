import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubCategories } from 'src/app/shared/models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http:HttpClient) { }
  addSubCategory(subcategory:object,name:string): Observable<SubCategories>{
    return this.http.post<SubCategories>(`http://localhost:5000/subcategories/?name=${name}`,subcategory)

  }
  createSubCategory(subcategory:object,id:string): Observable<SubCategories>{
    return this.http.post<SubCategories>(`http://localhost:5000/subcategories/add/${id}`,subcategory)
  }
  getonesubCategory(id:string): Observable<SubCategories>{
    return this.http.get<SubCategories>(`http://localhost:5000/subcategories/${id}`)
  }

  editSubCategory(subcategory:object,id:string): Observable<SubCategories>{
    return this.http.put<SubCategories>(`http://localhost:5000/subcategories/${id}`,subcategory)
  }
  deleteSubCategory(id:string): Observable<SubCategories>{
    return this.http.delete<SubCategories>(`http://localhost:5000/subcategories/${id}`)
  }
  allSubCategory(): Observable<SubCategories>{
    return this.http.get<SubCategories>(`http://localhost:5000/subcategories`)

  }
  allSubCategoryof(id:string): Observable<SubCategories>{
    return this.http.get<SubCategories>(`http://localhost:5000/subcategories/cat/${id}`)

  }
}
