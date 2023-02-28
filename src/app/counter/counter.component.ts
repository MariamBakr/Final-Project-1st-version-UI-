import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{

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

    ngOnInit(): void {
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

  // date: any;
  // now: any;
  // targetDate: any = new Date(2000, 0, 1);
  // targetTime: any = this.targetDate.getTime(0);
  // difference: number=0;
  // months: Array<string> = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  // ngAfterViewInit() {
  //   setInterval(() => {
  //     this.tickTock();
  //     this.difference = this.targetTime - this.now;
  //     this.difference = this.difference / (1000 * 60 * 60 * 24);

  //     // !isNaN(this.days.nativeElement.innerText)
  //     //   ? (this.days.nativeElement.innerText = Math.floor(this.difference%7))
  //     //   : (this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
  //     if(this.weeks.nativeElement.innerText<=0){
  //       this.weeks.nativeElement.innerText=0;
  //       this.days.nativeElement.innerText = Math.floor(this.difference%7)
  //       if(this.days.nativeElement.innerText<=0){
  //         this.days.nativeElement.innerText=0;
  //         if(this.hours.nativeElement.innerText==0 && this.minutes.nativeElement.innerText==0 && this.seconds.nativeElement.innerText==0){
  //           this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`
  //         }
  //       }
  //     }
  //   }, 1000);
  // }

  // tickTock() {
  //   this.date = new Date();
  //   this.now = this.date.getTime();
  //   this.weeks.nativeElement.innerText=Math.floor(this.difference/7);
  //   this.days.nativeElement.innerText = Math.floor(this.difference%7);
  //   this.hours.nativeElement.innerText = 23 - this.date.getHours();
  //   this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
  //   this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  // }
