import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

interface Result {
  course: string;
  score: string;
  grade: string;
  date: string;
}

const RESULTS: Result[] = [
  {
    course: 'Java',
    score: '87%',
    grade: 'A',
    date: '11/12/2020',
  },
  {
    course: 'Python',
    score: '75%',
    grade: 'B',
    date: '20/12/2020',
  },
  {
    course: 'Scala',
    score: '35%',
    grade: 'Failed',
    date: '30/12/2020',
  },
];
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css'],
})
export class ViewResultComponent implements OnInit {
  results = RESULTS;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.notLogin();
  }
}
