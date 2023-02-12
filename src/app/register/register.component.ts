import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  type1:string='password'
  type2:string='password'
  showEyeSlashIcon1:boolean=false
  showEyeSlashIcon2:boolean=false
  
  // Functions
  register(registerForm:any){
    console.log("Successful Registration")
    console.log(registerForm.value)
  }

  show_password(e:any,){
    console.log("Password Showed Successfully")
    this.type1='text'
    this.showEyeSlashIcon1=true
  }

  hide_password(e:any){
    console.log("Password Hide Successfully")
    this.type1='password'
    this.showEyeSlashIcon1=false
  }

  show_confirmPassword(e:any,){
    console.log("Password Showed Successfully")
    this.type2='text'
    this.showEyeSlashIcon2=true
  }

  hide_confirmPassword(e:any){
    console.log("Password Hide Successfully")
    this.type2='password'
    this.showEyeSlashIcon2=false
  }
}
