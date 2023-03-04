import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER_REGISTER_URL,USER_LOGIN_URL,USER_UPDATE_DATA_URL} from './../shared/constants/urls';
// import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isUserLoged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userType:BehaviorSubject<string>= new BehaviorSubject<string>("");
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    
    // in case user click on refresh this function will check if user loged in or not and this check from local storage
    // and in case user was logid in it will keep user to still loged in
    if(localStorage.getItem('userToken')!=null) {
      let token=localStorage.getItem("userToken");
      let userType=localStorage.getItem("userType");
      this.saveUserData(token??"",userType??"")
    }
   }

  // userData:any = new BehaviorSubject(null);
  
getToken():string{
  return localStorage.getItem("userToken")??''
}
get_logedUser():boolean{
  return localStorage.getItem("userToken")!=null;
}

  saveUserData(token:string,userType:string){
    // let encodedToken =JSON.stringify( localStorage.getItem('userToken'))
    // let decodedToken :object = jwtDecode(encodedToken)
    localStorage.setItem('userToken',token)
    localStorage.setItem('userType',userType)

    // this.userData.next(decodedToken);
    this.isUserLoged.next(true);
    this.userType.next(userType);
    // console.log(this.userData)
  }

  register(userData:object):Observable<any>{
    console.log(userData);
  return this._HttpClient.post(USER_REGISTER_URL,userData);
  }

  login(userData:object):Observable<any>{
  return this._HttpClient.post(USER_LOGIN_URL,userData);
  }

 update(userData:object):Observable<any>{
  return this._HttpClient.post(USER_UPDATE_DATA_URL,userData);
 } 



 

 logOut(){
  localStorage.removeItem('userToken');
  localStorage.removeItem('userType');
  this.isUserLoged.next(false);
  this.userType.next("");
  this._Router.navigate(['/home'])
 }

}
