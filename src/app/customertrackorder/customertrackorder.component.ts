import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute
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
  dDay = new Date('Oct 30 2023 00:00:00');
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  milliSecondsInASecond = 1000;
  timeDifference: number=0;
  daysToDday: number=0;
  id:string='';

constructor(){
  console.log(this.dDay);
}
  
    ngOnInit(): void {

      // this.id=String(this..snapshot.paramMap.get("id"))
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
