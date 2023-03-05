import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POST_NEW_CUSTUMORDER_PROPOSAL_URL,GET_SPECIFIC_CUSTUMORDER_PROPOSALS_URL } from './../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ProposalsService {

  constructor(private _HttpClient:HttpClient) { }

  post_newProposal(proposal_data:object,customOrderId:any){
    console.log("post_newProposal from proposal service : ",proposal_data )

    return this._HttpClient.post(POST_NEW_CUSTUMORDER_PROPOSAL_URL,proposal_data,customOrderId);
    console.log("........................................................." )

  }

  getSpecificCustomOrder_proposals(customOrder_id:any){
    return this._HttpClient.get(GET_SPECIFIC_CUSTUMORDER_PROPOSALS_URL,customOrder_id);
  }
}
