import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { StudentAnswer } from 'src/app/model/StudentAnswer';
import { Test } from 'src/app/model/Test';
import { TestQuestion } from 'src/app/model/TestQuestion';
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
  test_id:number=2;
  constructor(public modalService: NgbModal, private testService:TestService, private fb:FormBuilder) {}

  ngOnInit(): void {
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
   this.questionForm.get('student_id')?.setValue("72447277-31ef-42a3-a376-24562f69ce69");
   this.questionForm.get('test_id')?.setValue(2);
  }

  addAnswer(selected_option:number, question_id:number, answer:string){
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
    console.log(this.questionForm.value)
  }

  
}
