import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getStudentByEmail(studentEmail: string){
    return this.http.get<any>("https://tlc-testing.herokuapp.com/api/student/find/"+studentEmail);
  }
}
