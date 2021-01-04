import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
    timeStartDifference: any;
    secondsToDday: any;
    minutesToDday: any;
    hoursToDday: any;
    daysToDday: any;
    public timeStart: any;
    
    timeEndDifference: any;
    secondsToDdays: any;
    minutesToDdays: any;
    hoursToDdays: any;
    daysToDdays: any;
    public timeEnd: any;
    
    private subscription!: Subscription;

  constructor() { }

    public dateNow = new Date();
    public TimeStart = new Date('01/06/2021 10:30:00');
    public TimeEnd = new Date('01/06/2021 10:35:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    private getStartTimeDifference () {
      this.timeStartDifference = this.TimeStart.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeStartDifference);
    }

    private getEndTimeDifference() {
      this.timeEndDifference = this.TimeEnd.getTime() - new  Date().getTime();
      this.allocateTimeUnit(this.timeEndDifference);
    }

    private allocateTimeUnits (timeStartDifference: any) {
      this.secondsToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
      this.timeStart = this.daysToDday +"Day "+ this.hoursToDday +"Hour "+ this.minutesToDday +"Minute "+ this.secondsToDday;
    }

    private allocateTimeUnit (timeEndDifference: any) {
      this.secondsToDdays = Math.floor((timeEndDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDdays = Math.floor((timeEndDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDdays = Math.floor((timeEndDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDdays = Math.floor((timeEndDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
      this.timeEnd = this.hoursToDdays +":"+ this.minutesToDdays +":"+ this.secondsToDdays;
    }
  
  callTimer(){
    this.subscription = interval(1000)
    .subscribe(x => {
      if (this.daysToDday<0 || (this.daysToDday==0 && this.hoursToDday==0 && this.minutesToDday==0 && this.secondsToDday==0)) {
          this.timeStart = "Exams Started";
          if (this.timeStart == "Exams Started") {
            if (this.daysToDdays<0 || (this.daysToDdays==0 && this.hoursToDdays==0 && this.minutesToDdays==0 && this.secondsToDdays==0)) {
              this.timeStart = "Exams has ended";
              this.timeEnd = "Time up";
            }else{
            this.getEndTimeDifference();
            }
          }
       }else{
        this.getStartTimeDifference();
       }
     });
  }
}
