import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER_REGISTER_URL,USER_LOGIN_URL,USER_UPDATE_DATA_URL,GET_CLIENT_NAME_URL} from './../shared/constants/urls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isUserLoged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userType:BehaviorSubject<string>= new BehaviorSubject<string>("");
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    
    
    if(localStorage.getItem('userToken')!=null) {
      let token=localStorage.getItem("userToken");
      let userType=localStorage.getItem("userType");
      let userName=localStorage.getItem("userName");
      let userId=localStorage.getItem("userId");
      this.saveUserData(token??"",userType??"",userName??"",userId??"")
    }
   }


  
getToken():string{
  return localStorage.getItem("userToken")??''
}
get_logedUser():boolean{
  return localStorage.getItem("userToken")!=null;
}

  saveUserData(token:string,userType:string,userName:string,userId:string){
 
    localStorage.setItem('userToken',token)
    localStorage.setItem('userType',userType)
    localStorage.setItem('userName',userName)
    localStorage.setItem('userId',userId)

   
    this.isUserLoged.next(true);
    this.userType.next(userType);
   
  }

  register(userData:object):Observable<any>{
    console.log(userData);
  return this._HttpClient.post(USER_REGISTER_URL,userData);
  }

  login(userData:object):Observable<any>{
  return this._HttpClient.post(USER_LOGIN_URL,userData);
  }

  get_clientName(clientId:any):Observable<any>{
    console.log(clientId);
    return this._HttpClient.post(GET_CLIENT_NAME_URL,clientId);
    }

 update(userData:object):Observable<any>{
  return this._HttpClient.post(USER_UPDATE_DATA_URL,userData);
 } 



 

 logOut(){
  localStorage.removeItem('userToken');
  localStorage.removeItem('userType');
  localStorage.removeItem('userName');
  localStorage.removeItem('userId');
  this.isUserLoged.next(false);
  this.userType.next("");
  this._Router.navigate(['/home'])
  
 }

}
