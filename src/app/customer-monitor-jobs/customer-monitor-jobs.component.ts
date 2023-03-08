import { ProposalService } from './../Services/proposal.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOrderService } from './../Services/custom-order.service';
import { HttpClient } from '@angular/common/http';
import { apiResults } from '../shared/models/apiResults';
import { ProposalsService } from './../Services/proposals.service';
import { CustomerTrackOrderService } from './../Services/customer-track-order.service';

@Component({
  selector: 'app-customer-monitor-jobs',
  templateUrl: './customer-monitor-jobs.component.html',
  styleUrls: ['./customer-monitor-jobs.component.css']
})
export class CustomerMonitorJobsComponent {

  proposals:any

  wanted_date:string=""
  year:string="";
  month:string="";
  day:string="";
  date:string="";
  
  constructor(private service:ProposalService,private _CustomerTrackOrderService:CustomerTrackOrderService, private router:Router,private _CustomOrderService:CustomOrderService,private _HttpClient:HttpClient){
    // console.log("asdasdasd");
    this.service.getAllOrders().subscribe((data)=>{
      this.proposals = data.data;
    })
  }

  seeProposals(id:string){
    this.router.navigate(['client/proposals',id])
  }

  goToCustomerTrackOrder(customOrderId:string){
    
    this.router.navigate(['/client/trackOrder'])
    console.log("id=",customOrderId);
    this._HttpClient.get<apiResults>("http://localhost:5000/customOrder/Details/"+customOrderId).subscribe({
      next:(data)=>{
        console.log(data);
        console.log(data.data);
        let orderDetails=data.data._doc
        let proposals=orderDetails.proposals
        console.log(proposals);
        for(let proposal of proposals){
          if(proposal.status == "accepted"){
            console.log(proposal);
            console.log(proposal.job_deadline);
            this.wanted_date=proposal.job_deadline
            break;
          }
        }

        let split_date= this.wanted_date.split('-')
        console.log(split_date);   
        this.year=split_date[0]; 
        this.month=split_date[1]; 
        this.day=split_date[2]; 

        this.date=this.date.concat(this.month," ",this.day," ",this.year)
        console.log(this.date);
// this._CustomerTrackOrderService.save_date_send_to_customerTrackOrder_component(this.date)
this._CustomerTrackOrderService.sendDate(this.date)

        // for 
      }
    })

    // this._CustomOrderService.getCustomOrderDetails_by_id(customOrderId).subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     console.log(data.data);
    //   }
    // })
  }

}
