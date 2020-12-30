import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import { Observable } from 'rxjs';
import { StudentAnswer } from '../model/StudentAnswer';


@Injectable({
  providedIn: 'root'
})
export class StudentAnswerService extends BaseUrl  {

  constructor(private httpClient:HttpClient) {
    super();
  }

  public postAnswer(answer:StudentAnswer):Observable<any>{
      return this.httpClient.post<StudentAnswer>(`${this.baseURL}/api/test-answer`, answer);
  }

  public getAnswerByStudentIdAndTestId(student_id:string, test_id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/api/answers/get-by-student/${test_id}/${student_id}`);
  }
}
