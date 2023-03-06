import { Component, OnInit } from '@angular/core';
import { CustomOrderService } from '../Services/custom-order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jopdetailscard',
  templateUrl: './jopdetailscard.component.html',
  styleUrls: ['./jopdetailscard.component.css']
})
export class JopdetailscardComponent implements OnInit {
  subCategory:any;
  category:any;
  customOrder:any="";
  customOrderId:any;

constructor(private _ActivatedRoute:ActivatedRoute,private _CustomOrderService:CustomOrderService){
  this.customOrderId =this._ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.customOrderId);
}


  ngOnInit(){
    this._CustomOrderService.getCustomOrderDetails_by_id(this.customOrderId).subscribe({
      next:(response)=>{
        // if(data["status"]==200){}
        // console.log(response);
        console.log(response.data);
        this.category=response.data.category.name;
        this.subCategory=response.data.subCategory.name;
        // console.log(response.data._doc.description);
        // console.log(response.data._doc.colors);
        // console.log(response.data._doc.quantity);
        // console.log(response.data._doc.price.min);
        // console.log(response.data._doc.price.max);
        // console.log(response.data._doc.images[0]);
        // this.customOrder=response.data._doc;
        this.customOrder=response.data;
        // console.log(this.customOrder._doc.images[0]);
        console.log(this.customOrder);
      }
    })
}
}
