import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-submited',
  templateUrl: './submited.component.html',
  styleUrls: ['./submited.component.css']
})
export class SubmitedComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.notLogin();
  }

}
