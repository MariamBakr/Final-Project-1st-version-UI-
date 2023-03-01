// ******************* Imporst *********************
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAuthService } from './../Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // **************** Variables *****************

  isVendor:any;
  userType:any;
  type1:string='password'
  type2:string='password'
  showEyeSlashIcon1:boolean=false
  showEyeSlashIcon2:boolean=false
  error:string='';  
  isloading:boolean=false;

  //  *********************** Reactive Form *************************
  register_form=new FormGroup({
    f_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    l_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    taxNumber:new FormControl(''),
    // Validators.minLength(6),Validators.maxLength(10)
    email:new FormControl('',[Validators.required,Validators.email]),
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

// *********************** Constructor ****************************** 
  constructor(private _userAuthService:UserAuthService,private _Router:Router){
    
  }



  // ********************** Functions ******************************


  // ............... addTaxNumberValidation function ................

  addTaxNumberValidation(){
    //  New solution for register problem
    if(this.userType=="vendor"){
      this.register_form.get("taxNumber")?.addValidators([Validators.required])
      this.register_form.get("taxNumber")?.updateValueAndValidity()
    }
    else{
      this.register_form.get("taxNumber")?.clearValidators() 
      this.register_form.get("taxNumber")?.updateValueAndValidity()
    }
  }
 
  // ............... check_password function ................
  check_password(e:any){
      e.preventDefault()
      if(this.register_form.value.password  === this.register_form.value.confirmPassword ){
        console.log(true);
        console.log(this.register_form.value.password);
        console.log(this.register_form.value.confirmPassword);
        return true
      }
      else{
        console.log(false);
        console.log(this.register_form.value.password);
        console.log(this.register_form.value.confirmPassword);

        return false
      }
  }


  // .............. Show & Hide Passords functions .............
  show_password(){
    console.log("Password Showed Successfully")
    this.type1='text'
    this.showEyeSlashIcon1=true
  }

  hide_password(){
    console.log("Password Hide Successfully")
    this.type1='password'
    this.showEyeSlashIcon1=false
  }

  show_confirmPassword(){
    console.log("Password Showed Successfully")
    this.type2='text'
    this.showEyeSlashIcon2=true
  }

  hide_confirmPassword(){
    console.log("Password Hide Successfully")
    this.type2='password'
    this.showEyeSlashIcon2=false
  }

  // ................... SubmitRegisterForm .............
  SubmitRegisterForm(register_form:FormGroup):void{
      this.isloading=true;
    
    // console.log(register_form.value);// must be removed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this._userAuthService.register(register_form.value).subscribe({
      next:(response)=>{
        this.isloading=false;
        if(response.message ==='success'){
          // navigate to Login Page
          if(response.message==='success'){
            
            this._Router.navigate(['./login'])
          }
        }
        else{
          this.error = response.message;
        }  
      }
    })
    // console.log("Succesfull Registration");// must be removed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
  }
  
}
