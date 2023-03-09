import { ProposalService } from './../Services/proposal.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-jops',
  templateUrl: './vendor-jops.component.html',
  styleUrls: ['./vendor-jops.component.css']
})
export class VendorJopsComponent {

  id:any
  proposals:any[]=[];

  constructor(private service: ProposalService, private router:Router){
    this.id=localStorage.getItem('userId')
    console.log(this.id)
    this.service.getProposals().subscribe((data)=>{
      for(let i of data){
        for(let prop of i.proposals){
          if(prop.userId == this.id){
            this.proposals.push(prop)
          }
        }
      }
    })
    // console.log(this.proposals)
  }

  details(orderId:string){
    this.router.navigate(['customOrderDetails',orderId])
  }
}
