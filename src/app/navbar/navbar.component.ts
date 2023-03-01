import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { UserAuthService } from './../user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  isLogin:boolean=false;
  constructor(private _userAuthService:UserAuthService){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this._userAuthService['userData'].subscribe({
      next:()=>
      {
        if(this._userAuthService['userData'].getValue()!=null)
        {
          this.isLogin=true;
        }
        else
        {
          this.isLogin=false;
        }
      }
    })
  }
  

  logOut(){
    this._userAuthService['logOut']();
  }
   
  
}




