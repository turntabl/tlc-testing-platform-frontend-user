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
      return this.httpClient.post<StudentAnswer>(`http://localhost:8080/api/test-answer`, answer);
  }
}
