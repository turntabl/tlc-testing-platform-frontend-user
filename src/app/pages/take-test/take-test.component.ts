import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TestDoneComponent } from '../../modal/test-done/test-done.component';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
})
export class TakeTestComponent implements OnInit {
  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {}

  openTestDoneModal() {
    this.modalService.open(TestDoneComponent);
  }
}
