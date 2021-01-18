import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  yes: string="Yes";
  
  constructor(
    public activeModal: NgbActiveModal, 
    private studentAnswerService:StudentAnswerService, 
    private localService:LocalDataService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  submit(){
    this.yes="Submitting..."
    this.studentAnswerService.postAnswer(this.data).subscribe((res)=>{
      if (JSON.parse(JSON.stringify(res)).message=="success") {
        this.yes="Yes"
        this.activeModal.dismiss('Cross click');
        this.router.navigate(['submited']);
      }
    });

    this.localService.testTaken = true;
  }
}
