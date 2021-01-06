import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-successfully-submitted',
  templateUrl: './successfully-submitted.component.html',
  styleUrls: ['./successfully-submitted.component.css']
})
export class SuccessfullySubmittedComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.notLogin();
  }

}
