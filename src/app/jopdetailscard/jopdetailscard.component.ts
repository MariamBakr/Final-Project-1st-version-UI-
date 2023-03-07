import { CustomOrder } from './../shared/models/customOrder';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProposalService } from '../Services/proposal.service';

@Component({
  selector: 'app-jopdetailscard',
  templateUrl: './jopdetailscard.component.html',
  styleUrls: ['./jopdetailscard.component.css']
})
export class JopdetailscardComponent implements OnInit{
  
  @Input() order:any
  @Input() client:any
  
  ngOnInit(): void {
  
}
}
