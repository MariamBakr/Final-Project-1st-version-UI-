import { ADD_TO_WISHLIST_URL, WISHLIST_URL, REMOVE_FROM_WISHLIST_URL } from './../shared/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResults } from '../shared/models/apiResults';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient, private service:WishlistService) { }

  getAllForClient():Observable<apiResults>{
    return this.http.get<apiResults>(WISHLIST_URL)
  }

  addToList(prodId:string):Observable<string>{
    return this.http.get<string>(ADD_TO_WISHLIST_URL+'/'+prodId)
  }

  removeFromList(prodId:string):Observable<apiResults>{
    return this.http.get<apiResults>(REMOVE_FROM_WISHLIST_URL+'/'+prodId)
  }
}
