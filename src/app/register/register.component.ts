import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isVendor:any;
  userType:any;
  type1:string='password'
  type2:string='password'
  showEyeSlashIcon1:boolean=false
  showEyeSlashIcon2:boolean=false
  
  register_form=new FormGroup({
    f_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    l_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    cn:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  // Functions
  // user_or_vendor(){
  //   console.log(this.selectValue);
  // }
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

  register(){
    console.log("Successful Registration")
    console.log(this.register_form.value)
    console.log(this.userType)
  }

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

  constructor(){
    
  }
}
