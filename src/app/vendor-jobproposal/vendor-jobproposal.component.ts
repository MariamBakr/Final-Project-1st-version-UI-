import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-jobproposal',
  templateUrl: './vendor-jobproposal.component.html',
  styleUrls: ['./vendor-jobproposal.component.css']
})
export class VendorJobproposalComponent {
  
  job_proposal_form=new FormGroup({
    job_proposal: new FormControl('',[Validators.required,Validators.minLength(100),Validators.maxLength(300)]),
    job_deadline: new FormControl('',[Validators.required]),
    offered_price: new FormControl('',[Validators.required]),
    work_samples: new FormControl(''),

  })
  send_proposal(){
    console.log("Proposal send sucssesfully")
    console.log(this.job_proposal_form.value)
  }
}
