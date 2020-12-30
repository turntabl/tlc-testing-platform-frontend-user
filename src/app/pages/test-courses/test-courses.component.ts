import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/Course';
import { Test } from 'src/app/model/Test';
import { CourseService } from 'src/app/service/course.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test-courses',
  templateUrl: './test-courses.component.html',
  styleUrls: ['./test-courses.component.css']
})
export class TestCoursesComponent implements OnInit {

  constructor(private testService:TestService) { }

  tests:Test[]=[];

  ngOnInit(): void {
        this.getAllCourses();
  }

  getAllCourses(){
    this.testService.getAllTests().subscribe( (response) => {
      this.tests = response;
    });
  }
}
