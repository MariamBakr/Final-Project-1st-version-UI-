import { ThisReceiver } from '@angular/compiler';
import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { UserAuthService } from './../Services/user-auth.service';
import { user } from './../shared/models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  isLogin:boolean=false;
  userType:string="";
  userName:any;
  constructor(private _userAuthService:UserAuthService){
    this._userAuthService.isUserLoged.subscribe({
      next:(data)=>
      {
        this.isLogin=data;
    }
  })
  this.userType=this._userAuthService.userType.value
  // console.log(this.userType);
  }



  // ........................................................



  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }




  ngOnInit(): void {
this.userName=localStorage.getItem("userName")
  }
  

  logOut(){
    this._userAuthService['logOut']();
  }
   
  
}




