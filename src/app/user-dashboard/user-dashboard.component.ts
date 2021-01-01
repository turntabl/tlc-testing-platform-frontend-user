import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { LocalDataService } from '../service/local-data.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  totalCourses!:number;
  why!: boolean;

  constructor(private courseService:CourseService, private router: Router, private loginService: LoginService ) { }

  ngOnInit(): void {
    this.checkLoginState()
    this.getCourses();
  }

  checkLoginState() {
    this.loginService.checkLoginState();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(response => {
        this.totalCourses = response.length
    });
  }

}
