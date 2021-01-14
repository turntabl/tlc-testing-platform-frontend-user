import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { TestResultService } from 'src/app/service/test-result.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css'],
})
export class ViewResultComponent implements OnInit {
 studentResults:any;
 collect:any;
 student_id!:string;
 empty!: number;

  constructor(
    private loginService: LoginService,
    private testResultService:TestResultService
    ) {}

  ngOnInit(): void {
    this.loginService.notLogin();
    this.collect = localStorage.getItem('id');
    if (this.collect != null) {
      this.student_id = JSON.parse(this.collect).student_id;
    }
    this.getStudentTestResults();
  }

  getStudentTestResults(){
    this.testResultService.getTestResultsByStudentID(this.student_id).subscribe((results)=>{
        this.studentResults = results;
        this.empty = this.studentResults.length;
    });
  }
}
