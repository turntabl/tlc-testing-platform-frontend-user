import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentAnswerService } from 'src/app/service/student-answer.service';

@Component({
  selector: 'app-test-done',
  templateUrl: './test-done.component.html',
  styleUrls: ['./test-done.component.css'],
})
export class TestDoneComponent implements OnInit {
  @Input() data:any;
  
  constructor(public activeModal: NgbActiveModal, private studentAnswerService:StudentAnswerService) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  submit(){
    this.studentAnswerService.postAnswer(this.data).subscribe((res)=>{
      console.log(res)
    });
  }
}
