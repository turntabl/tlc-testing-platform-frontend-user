import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataService } from 'src/app/service/local-data.service';
import { StudentAnswerService } from 'src/app/service/student-answer.service';

@Component({
  selector: 'app-test-done',
  templateUrl: './test-done.component.html',
  styleUrls: ['./test-done.component.css'],
})
export class TestDoneComponent implements OnInit {
  @Input() data:any;
  
  constructor(public activeModal: NgbActiveModal, private studentAnswerService:StudentAnswerService, private localService:LocalDataService) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  submit(){
    this.studentAnswerService.postAnswer(this.data).subscribe((res)=>{
      console.log(res)
    });

    this.localService.testTaken = true;
  }
}
