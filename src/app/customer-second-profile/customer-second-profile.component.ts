import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProposalService } from '../Services/proposal.service';

@Component({
  selector: 'app-customer-second-profile',
  templateUrl: './customer-second-profile.component.html',
  styleUrls: ['./customer-second-profile.component.css']
})
export class CustomerSecondProfileComponent {
  userId:any
  client:any
  constructor(private service: ProposalService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.userId=String(this.activatedRoute.paramMap.subscribe((data)=>{
      this.userId = data.get('id')
      if(this.userId != null){
        this.service.displayVendor(this.userId).subscribe((data)=>{
          this.client = data;
        })
      }
        
      
    }))

  }
}
