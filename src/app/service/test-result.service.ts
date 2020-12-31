import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { BaseUrl } from './BaseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestResultService extends BaseUrl {

  constructor(private httpClient:HttpClient) {
    super();
  }
}
