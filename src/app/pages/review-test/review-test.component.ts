import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
interface Result {
  course: string;
  date: string;
}

const RESULTS: Result[] = [
  {
    course: 'Java',

    date: '11/12/2020',
  },
  {
    course: 'Python',

    date: '20/12/2020',
  },
  {
    course: 'Scala',

    date: '30/12/2020',
  },
];
@Component({
  selector: 'app-review-test',
  templateUrl: './review-test.component.html',
  styleUrls: ['./review-test.component.css'],
})
export class ReviewTestComponent implements OnInit {
  results = RESULTS;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.notLogin();
  }
}
