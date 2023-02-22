import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowHidePasswordService } from '../Services/show-hide-password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login_form=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
   

  })
type:string='password'
showEyeSlashIcon:boolean=false

  constructor(private _ShowHidePasswordService:ShowHidePasswordService){
    
    }
  //   get password() {
  //     return this.login_form.get('password');
  //  }
  // Functions
    login (){
      console.log("Looged In")
      console.log(this.login_form.value)
      
    }
    
  show_password(){
    console.log("Password Showed Successfully")
    this.type='text'
    this.showEyeSlashIcon=true
  }

  hide_password(){
    console.log("Password Hide Successfully")
    this.type='password'
    this.showEyeSlashIcon=false
  }
  }
  

