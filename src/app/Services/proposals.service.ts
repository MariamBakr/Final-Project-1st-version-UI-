import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POST_NEW_CUSTUMORDER_PROPOSAL_URL } from './../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ProposalsService {

  constructor(private _HttpClient:HttpClient) { }

  post_newProposal(proposal_data:object){
    // console.log("proposal Data from proposal service : ",proposal_data )
    // console.log("Customer Id from proposal service : ",customOrderId )

    return this._HttpClient.post<{messege:string,status:number}>(POST_NEW_CUSTUMORDER_PROPOSAL_URL,proposal_data);
    console.log("........................proposal service finished its function ................................." )

  }

  // getSpecificCustomOrder_proposals(customOrder_id:any){
  //   return this._HttpClient.get(GET_SPECIFIC_CUSTUMORDER_PROPOSALS_URL,customOrder_id);
  // }
}
