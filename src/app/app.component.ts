import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { TimerService } from './service/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tlc-system-frontend-user';
  photo!: string;

  constructor(public loginService: LoginService, public timerService: TimerService){}
  
  ngOnInit():void{
    this.timerService.callTimer();
  }

  signOut(){
    this.loginService.signout();
  }
  
}
