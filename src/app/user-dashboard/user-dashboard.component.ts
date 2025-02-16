import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { CourseService } from '../service/course.service';
import { LoginService } from '../service/login.service';
import { TimerService } from '../service/timer.service';
import { TestTakenService } from '../service/test-taken.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  totalCourses!: number;
  totalTestTaken!: number;
  student_id!: string;
  collect!: any;
  why!: boolean;
  counter = timer(0, 1000);

  constructor(
    private courseService:CourseService, 
    private loginService: LoginService, 
    public timerService: TimerService, 
    private testTakenService:TestTakenService
    ) { }

  ngOnInit(): void {
    this.loginService.notLogin();
    this.timerService.callTimer();
    this.collect = localStorage.getItem('id');
    if (this.collect != null) {
      this.student_id = JSON.parse(this.collect).student_id;
    }
    this.getAllTestTaken();
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      this.totalCourses = response.length;
    });
  }

  getAllTestTaken() {
    this.testTakenService.testTaken(this.student_id).subscribe((response) => {
      this.totalTestTaken = response.length;
    });
  }
}
