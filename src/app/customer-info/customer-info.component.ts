import { Component } from '@angular/core';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {

  client:any
  constructor(private service: UserAuthService){}

  ngOnInit() {
    this.service.getUser().subscribe((data) => {
      this.client = data;
      console.log(this.client)
    });
  }
}
