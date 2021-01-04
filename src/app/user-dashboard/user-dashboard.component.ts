import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { CourseService } from '../service/course.service';
import { LoginService } from '../service/login.service';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  totalCourses!:number;
  why!: boolean;counter = timer(0, 1000);
    timeDifference: any;
    timeDifferences: any;
    secondsToDday: any;
    minutesToDday: any;
    hoursToDday: any;
    daysToDday: any;
    clock: any;
    secondsToDdays: any;
    minutesToDdays: any;
    hoursToDdays: any;
    daysToDdays: any;
    clocks: any;
    private subscription!: Subscription;

  constructor(private courseService:CourseService, private router: Router, private loginService: LoginService, public timerService: TimerService ) { }

  ngOnInit(): void {
    this.checkLoginState()
    this.getCourses();
    this.timerService.callTimer();
  }

  checkLoginState() {
    this.loginService.checkLoginState();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(response => {
        this.totalCourses = response.length
    });
  }
}
