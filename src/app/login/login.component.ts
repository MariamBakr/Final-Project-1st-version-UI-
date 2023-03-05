import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowHidePasswordService } from '../Services/show-hide-password.service';
import { UserAuthService } from './../Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isloading:boolean=false;
  error:string=""
  type:string='password'
  showEyeSlashIcon:boolean=false

  login_form=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
   

  })

// ******************* Constructor *************************
  constructor(private _ShowHidePasswordService:ShowHidePasswordService,private _userAuthService:UserAuthService,private _Router:Router){
    
    }
 
    
    // *************** Functions ****************
    
    // ............. Password functions .................
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


  // ................... SubmitRegisterForm .............
  SubmitLoginForm(login_form:FormGroup):void{
    this.isloading=true;
  
    this._userAuthService.login(login_form.value).subscribe({
    next:(response)=>{
      this.isloading=false;
      console.log("aaaaaaaaaaaaaaaaaaaaaa",response.data.f_name);
      console.log("bbbbbbbbbbbbbbbbbbbbbb",response.data._id);
      if(response.status ==200){
        
          this._userAuthService.saveUserData(response.token,response.userType,response.data.f_name,response.data._id);
          this._Router.navigate(['./home'])
    
      }
      else{
        this.error = response.message;
      }  
    }
  })
  
}



// ......................... Function to get user Name ............

  }
  

