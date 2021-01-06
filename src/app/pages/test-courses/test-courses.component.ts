import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/Test';
import { LoginService } from 'src/app/service/login.service';
import { StudentAnswerService } from 'src/app/service/student-answer.service';
import { TestTakenService } from 'src/app/service/test-taken.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test-courses',
  templateUrl: './test-courses.component.html',
  styleUrls: ['./test-courses.component.css']
})
export class TestCoursesComponent implements OnInit {

  constructor(
    private testService: TestService, 
    private studentAnswerService: StudentAnswerService,
    private loginService: LoginService,
    private testTakenService: TestTakenService,
    ) { }

    totalTestTaken!: number;
    student_id!: string;
    collect!: any;
    tests:Test[]=[];

  ngOnInit(): void {
    this.loginService.notLogin();
    this.collect = localStorage.getItem('id');
    if (this.collect != null) {
      this.student_id = JSON.parse(this.collect).student_id;
    }
        this.getAllCourses();
        this.getAllTestTaken();

  }

  getAllCourses(){
    this.testService.getAllTests().subscribe( (response) => {
      this.tests = response;
    });
  }

  getAllTestTaken() {
    this.testTakenService.testTaken(this.student_id).subscribe((response) => {
      this.totalTestTaken = response.length;
    });
  }
}
