import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { TestQuestion } from '../model/TestQuestion';
import { BaseUrl } from './BaseUrl';
import { Observable } from 'rxjs';
import { Test } from '../model/Test';

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseUrl {
  constructor(private httpClient:HttpClient) {
    super();
  }

  public getTestById(test_id:number):Observable<Test>{
    return this.httpClient.get<any>((`${this.baseURL}/api/test/get/${test_id}`));
  }

  public getAllTests():Observable<Test[]>{
    return this.httpClient.get<any>(`${this.baseURL}/api/test/all`);
  }

  public getTestQuestionById(test_id:number):Observable<TestQuestion[]>{
    return this.httpClient.get<any>((`${this.baseURL}/api/question/${test_id}`));
  }

}
