
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-track-order',
  templateUrl: './customer-track-order.component.html',
  styleUrls: ['./customer-track-order.component.css']
})
export class CustomerTrackOrderComponent {

  date: any;
  now: any;
  targetDate: any = new Date(2023, 10, 1);
  targetTime: any = this.targetDate.getTime();
  difference: number=0;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  //

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

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference%7))
        : (this.days.nativeElement.innerText =  "Order has been deliverd");

        // if(this.days.nativeElement.innerText<=0){
        //   console.log("days")
        //   if(this.hours.nativeElement.innerText<=0){
        //     console.log("hours")
        //     if(this.minutes.nativeElement.innerText<=0){
        //       console.log("minutes")
        //       this.days.nativeElement.innerText =  "Order has been deliverd";

        //     }
        //   }

        // }
        // else{this.days.nativeElement.innerText = Math.floor(this.difference%7)}


    }

    ,1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.weeks.nativeElement.innerText=Math.floor(this.difference/7);
    this.days.nativeElement.innerText = Math.floor(this.difference%7);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}

