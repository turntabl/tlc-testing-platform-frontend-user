import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/model/Test';
import { StudentAnswerService } from 'src/app/service/student-answer.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test-courses',
  templateUrl: './test-courses.component.html',
  styleUrls: ['./test-courses.component.css']
})
export class TestCoursesComponent implements OnInit {

  constructor(private testService:TestService, private studentAnswerService:StudentAnswerService) { }

  tests:Test[]=[];

  ngOnInit(): void {
        this.getAllCourses();
  }

  getAllCourses(){
    this.testService.getAllTests().subscribe( (response) => {
      this.tests = response;
    });
  }

   checkIfStudentHasTakenTest(test_id:number):boolean{
     let isStudentTestTaken:boolean=false;
      this.studentAnswerService.getAnswerByStudentIdAndTestId("0675348c-8243-4a3b-8ec3-f9407817f447",test_id).subscribe(
        (res)=>{
          if(res.length > 1){
            isStudentTestTaken = true;        
          }
        }
      );

      return isStudentTestTaken;
   }
}
