import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseUrl {

  constructor(private httpClient:HttpClient) {
    super();
  }

  public getCourses():Observable<Course[]>{
    return this.httpClient.get<any>(`${this.baseURL}/api/courses/get`);
  }
}
