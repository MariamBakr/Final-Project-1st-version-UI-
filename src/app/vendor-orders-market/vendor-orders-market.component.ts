import { Component, OnInit } from '@angular/core';
import { OrdersHistoryService } from '../Services/orders-history.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor-orders-market',
  templateUrl: './vendor-orders-market.component.html',
  styleUrls: ['./vendor-orders-market.component.css']
})
export class VendorOrdersMarketComponent  implements OnInit{
notification:any;
title:any;
price:any;
overview:any;
quantity:any;
image:any;
arr:any;
constructor(private service:OrdersHistoryService,private _HttpClient:HttpClient ){
  
  
  }
  ngOnInit(): void {
    this.service.getVendor().subscribe({
      next:(response)=>{
        console.log(response);
        this.notification=response.data.notification
        console.log(this.notification);


        for(let x of this.notification){
          console.log(x.productId);
          this._HttpClient.get("http://locathost:5000/vendor/products/productbyId/"+x.productId).subscribe({
            next:(res)=>{
              console.log(res);
              this.arr.push(res)
            }
          })
        }

        console.log(this.arr);
        // console.log(this.notification[0].productId);



        // for(let i=0; i< this.notification.length;i++){
          
        // }
        // this.arr
        // 

      }
    })

  } 
}