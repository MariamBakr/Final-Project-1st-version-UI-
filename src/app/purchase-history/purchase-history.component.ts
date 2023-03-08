import { OrdersHistoryService } from './../Services/orders-history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit{
  
  orders:any;
  products:Array<object>=[]
  constructor(private service:OrdersHistoryService){}

  ngOnInit(): void {
    this.service.getAllOrders().subscribe((data)=>{
      this.orders=data
      
      for(let i of this.orders){
        this.products.push(i.products)
      }

      console.log(this.orders)
      console.log(this.products)
      
    })
    
  }
 
}
