import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_REGISTER_URL,USER_LOGIN_URL,USER_UPDATE_DATA_URL} from './../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private _HttpClient:HttpClient) { }
register(userData:object):Observable<any>{
 return this._HttpClient.post(USER_REGISTER_URL,userData);

}
login(userData:object):Observable<any>{
  return this._HttpClient.post(USER_LOGIN_URL,userData);
 
 }
 update(userData:object):Observable<any>{
  return this._HttpClient.post(USER_UPDATE_DATA_URL,userData);
 
 }
}
