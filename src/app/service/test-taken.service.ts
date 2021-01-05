import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestTakenService extends BaseUrl {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public testTaken(student_id: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseURL}/api/test-taken/student/${student_id}`
    );
  }
}
