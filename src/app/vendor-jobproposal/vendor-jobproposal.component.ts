import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomOrderService } from '../Services/custom-order.service';
import { ProposalsService } from './../Services/proposals.service';
import { Categories } from './../shared/models/category';
@Component({
  selector: 'app-vendor-jobproposal',
  templateUrl: './vendor-jobproposal.component.html',
  styleUrls: ['./vendor-jobproposal.component.css']
})
export class VendorJobproposalComponent implements OnInit {
  id:any;
  customOrder:any;
  subCategory:any;
  category:any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _CustomOrderService:CustomOrderService,private _ProposalsService:ProposalsService){
    this.id =this._ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }
 

  job_proposal_form=new FormGroup({
    job_proposal: new FormControl('',[Validators.required,Validators.minLength(100),Validators.maxLength(300)]),
    job_deadline: new FormControl('',[Validators.required]),
    offered_price: new FormControl('',[Validators.required]),
    work_samples: new FormControl(''),

  })



  ngOnInit(){
      this._CustomOrderService.getCustomOrderDetails_by_id(this.id).subscribe({
        next:(response)=>{
          // if(data["status"]==200){}
          console.log(response);
          console.log(response.data);
          // this.category=response.data.category.name;
          // this.subCategory=response.data.subCategory.name;
          // console.log(response.data._doc.description);
          // console.log(response.data._doc.images[0]);
          // this.customOrder=response.data._doc;
          this.customOrder=response.data;
        }
      })
  }

  add_new_proposal(){
    console.log("data_of_proposal from ts : ",this.job_proposal_form.value )
    this._ProposalsService.post_newProposal(this.job_proposal_form.value,this.id).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
    console.log("........................................................." )

  }

}
