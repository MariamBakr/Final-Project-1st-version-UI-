import { ProposalService } from './../Services/proposal.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-monitor-jobs',
  templateUrl: './customer-monitor-jobs.component.html',
  styleUrls: ['./customer-monitor-jobs.component.css']
})
export class CustomerMonitorJobsComponent {

  proposals:any

  constructor(private service:ProposalService, private router:Router){
    console.log("asdasdasd");
    this.service.getAllOrders().subscribe((data)=>{
      this.proposals = data.data;
    })
  }

  seeProposals(id:string){
    this.router.navigate(['client/proposals',id])
  }

  goToCustomerTrackOrder(id:string){
    this.router.navigate(['client/trackOrder',id])
  }

}
