import { user } from './../shared/models/user';
import { CustomOrder } from './../shared/models/customOrder';
import { Proposal } from './../shared/models/proposal';
import { ProposalService } from './../Services/proposal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customerpage-for-jobdetails-and-vendorsproposals',
  templateUrl: './customerpage-for-jobdetails-and-vendorsproposals.component.html',
  styleUrls: ['./customerpage-for-jobdetails-and-vendorsproposals.component.css']
})
export class CustomerpageForJobdetailsAndVendorsproposalsComponent implements OnInit{

  orderId:any;
  client:any
  proposals:any;
  order:any;
  vendors:any[]=[];
  id:string=''

  constructor(private service: ProposalService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.id=String(this.activatedRoute.snapshot.paramMap.get("id"))

    this.orderId=String(this.activatedRoute.paramMap.subscribe((data)=>{
      this.orderId = data.get('id')
      if(this.orderId != null){
        this.service.displayProposals(this.orderId).subscribe((data)=>{
          this.order = data.proposal
          this.proposals = data.output;
          this.client = data.client
        })
      }  
    }))

  }

 getAll(){
    this.service.displayProposals(this.id).subscribe((data)=>{
      // this.order = data.prop;
      this.order = data.proposal
      this.proposals = data.output;
      this.client = data.client
    })
}

  acceptProposal(userId:string,customOrder:string){
      this.service.acceptProposal(userId,customOrder).subscribe((data)=>{
        
        this.router.navigate(['client/custom_orders'])
    })
    //to remove modal backdrop (overlay)
    $('.modal-backdrop').remove()
    $(document.body).removeClass("modal-open");
  }

  rejectProposal(userId:string,customOrder:string){
    this.service.rejectProposal(userId,customOrder).subscribe((data)=>{
        this.getAll()
    })
    $('.modal-backdrop').remove()
    $(document.body).removeClass("modal-open");

  }

  displayVendor(id:string){
    this.router.navigate(['/vendorProfile',id])
  }

value:any;
test:string='aly'
  arr:object[]=[
    {
      describtion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem',
      deadline:'2/3/2023',
      price:50,
    },
    {
      describtion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quasi atque natus architecto reprehenderit earum nulla quas. Aut, enim magnam Lorem',
      deadline:'6/6/2026',
      price:70,
    }]

sort(){
  console.log(this.value)
}
}
