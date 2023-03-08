import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTrackOrderService {
  private subject_wanted=new Subject<string>();
  constructor() { }
sendDate(date:string){
  this.subject_wanted.next(date)


}

reciveDate():Observable<string>{
  return this.subject_wanted.asObservable();
}
  // save_date_send_to_customerTrackOrder_component(date:string){
  //   this.wanted_date=date
  //   console.log("date from service=",this.wanted_date);
  // }

}
