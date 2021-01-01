import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  testTaken!: boolean;
  constructor() { }
  
}
