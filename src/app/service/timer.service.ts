import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { BaseUrl } from './BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class TimerService extends BaseUrl{
    timerStartCollector: any;
    timeStartDifference: any;
    secondsToDday: any;
    minutesToDday: any;
    hoursToDday: any;
    daysToDday: any;
    public timeStart: any;
    
    timerEndCollector: any;
    timeEndDifference: any;
    secondsToDdays: any;
    minutesToDdays: any;
    hoursToDdays: any;
    daysToDdays: any;
    public timeEnd: any;
    private subscription!: Subscription;
    constructor(private http: HttpClient) {
      super();
    }

    testIDCollector(id: number){
      this.http.get<any>((`${this.baseURL}/api/test/get/${id}`)).subscribe(result=>{
        this.timerStartCollector = new Date(JSON.parse(result.test_date).month+"/"+JSON.parse(result.test_date).day+"/"+JSON.parse(result.test_date).year
        +" "+JSON.parse(result.test_time_start).hour+":"+JSON.parse(result.test_time_start).minute);
        this.timerEndCollector = new Date(JSON.parse(result.test_date).month+"/"+JSON.parse(result.test_date).day+"/"+JSON.parse(result.test_date).year
        +" "+JSON.parse(result.test_time_end).hour+":"+JSON.parse(result.test_time_end).minute);
      });
    }

    public dateNow = new Date();
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    private getStartTimeDifference () {
      if(this.timerStartCollector!=null){
      this.timeStartDifference = this.timerStartCollector.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeStartDifference);
      }
    }

    private getEndTimeDifference() {
      if(this.timerEndCollector!=null){
      this.timeEndDifference = this.timerEndCollector.getTime() - new  Date().getTime();
      this.allocateTimeUnit(this.timeEndDifference);
      }
    }

    private allocateTimeUnits (timeStartDifference: any) {
      this.secondsToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeStartDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
      this.timeStart = this.daysToDday +"Day "+ this.hoursToDday +"Hour "+ this.minutesToDday +"Minute "+ this.secondsToDday+"Second";
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
  checkTimerStatus(){
    if (this.timeStart=="Exams Started" || this.timeStart=="Exams has ended") {
      return false;
    }else{
      return true
    }
  }
  timerDisplayTest(){
    if (this.timeStart=="Exams Started") {
      return true;
    }else{
      return false;
    }
  }
  checkTimeUp(){
    if (this.timeStart=="Exams has ended") {
      return true;
    }else{
      return false
    }
  }
}
