import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Answer } from 'src/app/model/Answer';
import { StudentAnswer } from 'src/app/model/StudentAnswer';
import { Test } from 'src/app/model/Test';
import { TestQuestion } from 'src/app/model/TestQuestion';
import { StudentAnswerService } from 'src/app/service/student-answer.service';
import { TestService } from 'src/app/service/test.service';
import { TestDoneComponent } from '../../modal/test-done/test-done.component';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
})
export class TakeTestComponent implements OnInit {
  questionForm : FormGroup = new FormGroup({
    student_id: new FormControl(''),
    test_id:new FormControl(''),
    answers:new FormArray([])
  })
  studentAnswer:StudentAnswer = new StudentAnswer;
  testDetails:Test= new Test;
  questions:TestQuestion[]=[];
  test_id:number=0;
  constructor(public modalService: NgbModal, private testService:TestService, private fb:FormBuilder, private route: ActivatedRoute, private studentAnswerService:StudentAnswerService) {}

  ngOnInit(): void {
    this.test_id = +<string>this.route.snapshot.queryParamMap.get('id');
    this.getTestDetails();
    this.getTestQuestions();
    this.captureTestDetails();
  }

  openTestDoneModal() {
    this.modalService.open(TestDoneComponent);
  }

  getTestDetails():void{
    this.testService.getTestById(this.test_id).subscribe((res)=>{
      this.testDetails.test_id = res.test_id;
      this.testDetails.course_id = res.course_id;
      this.testDetails.test_rules = res.test_rules;
      this.testDetails.test_title = res.test_title;
      this.testDetails.test_time_start = res.test_time_start;
      this.testDetails.test_time_end = res.test_time_end;
    });
  }

  getTestQuestions():void{
    this.testService.getTestQuestionById(this.test_id).subscribe((res)=>{
      this.questions = res;
    });
  }

  captureTestDetails():void{
   this.questionForm.get('student_id')?.setValue("0527e361-4bfa-4ff5-97c2-3315acdec618");
   this.questionForm.get('test_id')?.setValue(this.test_id);
  }

  addAnswer(selected_option:number, question_id:number, answer:string){

    for (let index = 0; index < this.answers.length; index++) {
      const element = this.answers.at(index);

      if(element.value.question_id == question_id){
        this.answers.removeAt(index);
      }
      
    }

    this.answers.push(this.fb.group({
      question_id:new FormControl(question_id),
      option_id: new FormControl(selected_option),
      answer: new FormControl(answer)
    }))
  }

  get answers(){
    return this.questionForm.get('answers') as FormArray;
  }

  submit(){
    console.log(this.questionForm.value);
    this.studentAnswerService.postAnswer(this.questionForm.value).subscribe((res)=>{
        console.log(res);
    });
  }

  
}
