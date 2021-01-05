import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-test-unavailable',
  templateUrl: './test-unavailable.component.html',
  styleUrls: ['./test-unavailable.component.css']
})
export class TestUnavailableComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.notLogin();
  }

}
