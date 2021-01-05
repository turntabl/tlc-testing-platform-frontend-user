import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-notpermitted',
  templateUrl: './notpermitted.component.html',
  styleUrls: ['./notpermitted.component.css']
})
export class NotpermittedComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  backToLogin(){
    this.loginService.signout();
    this.router.navigate(['/login']);
  }
}
