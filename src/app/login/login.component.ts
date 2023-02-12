import { Component } from '@angular/core';
import { ShowHidePasswordService } from '../Services/show-hide-password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
type:string='password'
showEyeSlashIcon:boolean=false

  constructor(private _ShowHidePasswordService:ShowHidePasswordService){
    
    }
// function for test to be removed
    test(e:any){
      console.log(e)
    }
  // Functions
    login (loginForm:any){
      console.log("Looged In")
      console.log(loginForm.value)
      
    }
    
  show_password(e:any){
    console.log("Password Showed Successfully")
    this.type='text'
    this.showEyeSlashIcon=true
  }

  hide_password(e:any){
    console.log("Password Hide Successfully")
    this.type='password'
    this.showEyeSlashIcon=false
  }
  }
  

