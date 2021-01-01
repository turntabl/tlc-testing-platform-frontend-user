import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tlc-system-frontend-user';

  constructor(public loginService: LoginService){}

  signOut(){
    this.loginService.signout();
  }
  
}
