import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { TestTakenService } from 'src/app/service/test-taken.service';

@Component({
  selector: 'app-review-test',
  templateUrl: './review-test.component.html',
  styleUrls: ['./review-test.component.css'],
})
export class ReviewTestComponent implements OnInit {

  allTests:any;
  collect:any;
  student_id!:string;
  empty!: number;

  constructor(
    private loginService: LoginService,
    private testTakenService: TestTakenService
    ) {}

  ngOnInit(): void {
    this.loginService.notLogin();
    this.collect = localStorage.getItem('id');
    if (this.collect != null) {
      this.student_id = JSON.parse(this.collect).student_id;
    }
    this.getAllTestTaken();
  }

  getAllTestTaken(){
    this.testTakenService.testTaken(this.student_id).subscribe((tests)=>{
      this.allTests = tests;
      this.empty = this.allTests.length;      
    });
  }
  
  dateConverter(date: string){
    return JSON.parse(date).day+"/"+JSON.parse(date).month+"/"+JSON.parse(date).year;
  }
}
