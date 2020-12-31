import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  totalCourses!:number;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(response => {
        this.totalCourses = response.length
    });
  }

}
