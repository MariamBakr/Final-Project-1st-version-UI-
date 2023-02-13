import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowHidePasswordService {
  inputType:string='password'
  showEyeSlashIcon:boolean=false
  constructor() { }

  show_password(e:any){
    console.log("Password Showed Successfully")
    this.inputType='text'
    this.showEyeSlashIcon=true
    return {
      inputType:this.inputType,
      showEyeSlashIcon:this.showEyeSlashIcon
    }
  }

  hide_password(e:any){
    console.log("Password Hide Successfully")
    this.inputType='password'
    this.showEyeSlashIcon=false
    return {
      inputType:this.inputType,
      showEyeSlashIcon:this.showEyeSlashIcon
    }


  }
}
