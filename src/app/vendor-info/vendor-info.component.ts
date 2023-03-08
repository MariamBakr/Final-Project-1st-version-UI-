import { user } from './../shared/models/user';
import { UserAuthService } from './../Services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {

  vendor:any
  constructor(private service: UserAuthService){}

  ngOnInit() {
    this.service.getUser().subscribe((data) => {
      this.vendor = data;
      console.log(this.vendor)
    });
  }
}
