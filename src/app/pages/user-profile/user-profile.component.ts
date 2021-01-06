import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  photo!: string;
  collect!: any;
  name!: string;
  email!: string;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.notLogin();
    if (localStorage.getItem("id")!=null) {
      this.collect = localStorage.getItem("id");
      this.name = JSON.parse(this.collect).first_name +" "+ JSON.parse(this.collect).last_name;
      this.email = JSON.parse(this.collect).email;
    }
  }

}
