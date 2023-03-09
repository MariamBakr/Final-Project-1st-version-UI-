import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomOrderService } from '../Services/custom-order.service';
import { UserAuthService } from '../Services/user-auth.service';
import { ProposalsService } from './../Services/proposals.service';
// import { Categories } from './../shared/models/category';


@Component({
  selector: 'app-vendor-jobproposal',
  templateUrl: './vendor-jobproposal.component.html',
  styleUrls: ['./vendor-jobproposal.component.css']
})
export class VendorJobproposalComponent implements OnInit {
  customOrderId:any;
  customOrder:any;
  subCategory:any;
  category:any;
  isProposalFaild:boolean=false;
  clientName:any;
  clientImage:any;
  job_proposal:any;
  work_samples:any;
  job_deadline:any;
  offered_price:any;
  isButtonClicked:boolean=false;


  constructor(private _ActivatedRoute:ActivatedRoute ,private _UserAuthService:UserAuthService, private _CustomOrderService:CustomOrderService,private _ProposalsService:ProposalsService){
    this.customOrderId =this._ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.customOrderId);
  }
 

  job_proposal_form=new FormGroup({
    job_proposal: new FormControl('',[Validators.required,Validators.minLength(100),Validators.maxLength(300)]),
    job_deadline: new FormControl('',[Validators.required]),
    offered_price: new FormControl('',[Validators.required]),
    // work_samples: new FormControl(''),

  })

  

  ngOnInit(){
    
      this._CustomOrderService.getCustomOrderDetails_by_id(this.customOrderId).subscribe({
        next:(response)=>{
          // if(data["status"]==200){}
          // console.log(response);
          console.log(response.data);
          this.category=response.data.category.name;
          this.subCategory=response.data.subCategory.name;

          
          // console.log("description=",response.data._doc.description);
          // console.log("colors=",response.data._doc.colors);
          // console.log("quantity=",response.data._doc.quantity);
          // console.log("price.min=",response.data._doc.price.min);
          // console.log("price.max=",response.data._doc.price.max);
          // console.log("images[0]=",response.data._doc.images[0]);
          // console.log("clientID=",response.data._doc.clientID);
          // this.customOrder=response.data._doc;
          this.customOrder=response.data;
          // console.log(this.customOrder._doc.images[0]);
          console.log(this.customOrder);


          this._UserAuthService.get_clientName(response.data).subscribe({
            next:(response)=>{
              console.log(response.data)
              this.clientName=response.data.f_name+" "+ response.data.l_name
              this.clientImage=response.data.image
              console.log("clientName=",this.clientName)
              console.log("clientImage=",this.clientImage)
              
            }
        
        })
        }
      })
      // console.log(this.clientId);
      // to get the name & image of the client that post the job
      
  

  }

 

  add_new_proposal(work_samples:any){
   let formData=new FormData();
    // let userIdObject={
    //   userId:localStorage.getItem("userId")
    // }

    // let userData=Object.assign(this.job_proposal_form.value,userIdObject)
  // console.log(userData);

    for(let key in this.job_proposal_form.value){
      formData.append(key,this.job_proposal_form.get(key)?.value)
    }
    formData.append("userId",localStorage.getItem("userId")??"")
    formData.append("customOrderId",this.customOrderId??"")
    
    for (let i = 0; i < work_samples.files.length; i++) {
      
      formData.append("work_samples",work_samples.files[i])
      
    }
    // console.log(formData.get("work_samples"));
    // console.log(formData);
    // console.log(formData.get("userId"));

    this._ProposalsService.post_newProposal(formData).subscribe({
      next:(data)=>{
        if(data.status==501){
          this.isProposalFaild=true
          console.log("isProposalFaild=",this.isProposalFaild);
          console.log("isButtonClicked=",this.isButtonClicked);
          console.log("status=",data.status);
        }else if(data.status==200){
          this.isButtonClicked=true
          console.log("isProposalFaild=",this.isProposalFaild);
          console.log("isButtonClicked=",this.isButtonClicked);
          console.log("status=",data.status);


          this.job_proposal=document.getElementById("job_proposal");
          this.offered_price=document.getElementById("offered_price");
          this.job_deadline=document.getElementById("job_deadline");
          this.work_samples=document.getElementById("work_samples");
          
          this.job_proposal.value="";
          this.offered_price.value="";
          this.job_deadline.value="";
          this.work_samples.value="";
        }
        
      }
    
    })
    console.log("........................................................." )

  }

}
