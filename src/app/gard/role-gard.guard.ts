import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './../Services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGardGuard implements CanActivate {
  constructor(private _userAuthService:UserAuthService){}
  // See vendor functionallity when true
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      return this._userAuthService.get_logedUser() && localStorage.getItem("userType")=='vendor'
  }
  
}
