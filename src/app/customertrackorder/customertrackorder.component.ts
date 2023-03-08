import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CustomerTrackOrderService } from './../Services/customer-track-order.service';
@Component({
  selector: 'app-customertrackorder',
  templateUrl: './customertrackorder.component.html',
  styleUrls: ['./customertrackorder.component.css']
})
export class CustomertrackorderComponent {
  [x: string]: any;
  @ViewChild('weeks', { static: true })
  weeks!: ElementRef;
  @ViewChild('days', { static: true })
  days!: ElementRef;
  @ViewChild('hours', { static: true })
  hours!: ElementRef;
  @ViewChild('minutes', { static: true })
  minutes!: ElementRef;
  @ViewChild('seconds', { static: true })
  seconds!: ElementRef;

  
  ////////////////////////////////////////////////////

  dateNow = new Date();
  dDay = new Date();
  // dDay = new Date('');
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  milliSecondsInASecond = 1000;
  timeDifference: number=0;
  daysToDday: number=0;
  id:string='';
  dateline:string=""
 

constructor(private _CustomerTrackOrderService:CustomerTrackOrderService){
  
  // console.log(this.dDay);
}
  
    ngOnInit(): void {
this._CustomerTrackOrderService.reciveDate().subscribe({
  next:(date)=>{
this.dateline=date
console.log(this.dateline);
this.dateline=this.dateline.concat(" ","00:00:00")
console.log(this.dateline);
this.dDay = new Date(this.dateline);
console.log(this.dDay);
}
})

// console.log(typeof(dDay));
console.log(this.dDay);

      
      setInterval(() => {
        this.timeDifference = this.dDay.getTime() - new  Date().getTime();






        this.getTimeDifference(this.timeDifference);
      },1000)
    }

   getTimeDifference (timeDifference:number) {
    this.seconds.nativeElement.innerText = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutes.nativeElement.innerText = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hours.nativeElement.innerText = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.days.nativeElement.innerText = Math.floor(((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay))%7);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    this.weeks.nativeElement.innerText = Math.floor(this.daysToDday/7);
}
}
