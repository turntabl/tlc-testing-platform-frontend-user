import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/Test';
import { LoginService } from 'src/app/service/login.service';
import { StudentAnswerService } from 'src/app/service/student-answer.service';
import { TestService } from 'src/app/service/test.service';
import { TimerService } from 'src/app/service/timer.service';

@Component({
  selector: 'app-test-courses',
  templateUrl: './test-courses.component.html',
  styleUrls: ['./test-courses.component.css']
})
export class TestCoursesComponent implements OnInit  {

  constructor(
    private testService: TestService, 
    private studentAnswerService: StudentAnswerService,
    private loginService: LoginService,
    public timerService: TimerService,
    ) {
  }

  tests:Test[]=[];

  ngOnInit(): void {
    this.loginService.notLogin();
        this.getAllCourses();
  }

  getAllCourses(){
    this.testService.getAllTests().subscribe( (response) => {
      this.tests = response;
    });
  }
}