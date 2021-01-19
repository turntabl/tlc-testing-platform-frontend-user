import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Test } from 'src/app/model/Test';
import { TestQuestion } from 'src/app/model/TestQuestion';
import { LocalDataService } from 'src/app/service/local-data.service';
import { LoginService } from 'src/app/service/login.service';
import { SnippetService } from 'src/app/service/snippet.service';
import { StudentAnswerService } from 'src/app/service/student-answer.service';
import { TestService } from 'src/app/service/test.service';
import { TimerService } from 'src/app/service/timer.service';
import { TestDoneComponent } from '../../modal/test-done/test-done.component';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
})
export class TakeTestComponent implements OnInit {
  isStudentTestTaken!:boolean;
  questionForm : FormGroup = new FormGroup({
    student_id: new FormControl(''),
    test_id:new FormControl(''),
    answers:new FormArray([])
  });
  testDetails:Test= new Test;
  questions:TestQuestion[]=[];
  test_id:number=0;
  test: any;
  student_id:string = '';
  collect:any;
  
  constructor(
    public modalService: NgbModal, 
    private testService:TestService, 
    private fb:FormBuilder, 
    private route: ActivatedRoute, 
    private studentAnswerService: StudentAnswerService, 
    private localService:LocalDataService,
    private loginService: LoginService,
    public timerService: TimerService,
    public snippetService: SnippetService
    ) {}

  ngOnInit(): void {
    this.loginService.notLogin();
    this.test_id = +<string>this.route.snapshot.queryParamMap.get('id');
    this.collect = localStorage.getItem('id');
    if (this.collect != null) {
      this.student_id = JSON.parse(this.collect).student_id;
      this.captureTestDetails();

    }
    this.checkIfStudentHasTakenTest();    
    if(!this.isTestTaken || !this.isStudentTestTaken){
      this.getTestDetails();
      this.getTestQuestions();
    }
    this.timerService.callTimer();
  }

  openTestDoneModal() {
    const modalRef = this.modalService.open(TestDoneComponent);
    modalRef.componentInstance.data = this.questionForm.value;
    modalRef.result.then(res=>{
    },dismiss=>{
    })
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
   this.questionForm.get('student_id')?.setValue(this.student_id);
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

  checkIfStudentHasTakenTest(){
     this.studentAnswerService.getStudentTestRecord(this.student_id,this.test_id).subscribe(
       (res)=>{
         console.log(res)
         if(res){
           this.isStudentTestTaken = true;        
         }else{
          this.isStudentTestTaken = false;
         }
       }
     );
  }

  get isTestTaken(){
    return this.localService.testTaken;
  }
}
