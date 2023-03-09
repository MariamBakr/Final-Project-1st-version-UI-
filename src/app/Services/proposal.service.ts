import { user } from './../shared/models/user';
import { DISPALY_PROPOSAL_URL, ACCEPT_PROPOSAL_URL, REJECT_PROPOSAL_URL, DISPALY_VENDOR_URL, GET_ALL_JOBS, GET_JOB_BY_CATID, GET_VENDOR_JOPS } from './../shared/constants/urls';
import { apiResults } from './../shared/models/apiResults';
import { CustomOrder } from './../shared/models/customOrder';
import { HttpClient } from '@angular/common/http';
import { Proposal } from './../shared/models/proposal';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PROPOSAL_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private http: HttpClient) { }

  getAllOrders():Observable<apiResults>{
    return this.http.get<apiResults>(PROPOSAL_URL)
  }

  displayProposals(OrderId:string):Observable<{proposal:object,output:[],client:object,prop:object}>{
    return this.http.get<{proposal:object,output:[],client:object,prop:object}>(DISPALY_PROPOSAL_URL+'/'+OrderId)
  }

  acceptProposal(userId:string,orderId:string):Observable<apiResults>{
    return this.http.put<apiResults>(ACCEPT_PROPOSAL_URL+'/'+userId,{orderId})
  }

  rejectProposal(userId:string,orderId:string):Observable<apiResults>{
  return this.http.put<apiResults>(REJECT_PROPOSAL_URL+'/'+userId,{orderId})
  }

  displayVendor(userId:string):Observable<user>{
    return this.http.get<user>(DISPALY_VENDOR_URL+'/'+userId)
  }

//////////////////////////////////// JOBS

  getAllJobs():Observable<[]>{
    return this.http.get<[]>(GET_ALL_JOBS)
  }

  filterByCategory(catId:string):Observable<CustomOrder[]>{
    return this.http.get<CustomOrder[]>(GET_JOB_BY_CATID+'/'+catId)
  }

  getProposals():Observable<any[]>{
    return this.http.get<any[]>(GET_VENDOR_JOPS)
  }
}
