import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
userType:any;
constructor(){
  this.userType=localStorage.getItem("userType")
}
}
