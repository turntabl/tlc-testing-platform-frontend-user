import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from './BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseUrl{

  constructor(private http: HttpClient) { 
    super();
  }

  getStudentByEmail(studentEmail: string){
    return this.http.get<any>(`${this.baseURL}/api/student/find/`+studentEmail);
  }
}
