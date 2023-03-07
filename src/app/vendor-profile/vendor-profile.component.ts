import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProposalService } from '../Services/proposal.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit{
  
  userId:any
  user:any
  constructor(private service: ProposalService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.userId=String(this.activatedRoute.paramMap.subscribe((data)=>{
      this.userId = data.get('id')
      if(this.userId != null){
        this.service.displayVendor(this.userId).subscribe((data)=>{
          this.user = data;
        })
      }
        
      
    }))

  }
}
