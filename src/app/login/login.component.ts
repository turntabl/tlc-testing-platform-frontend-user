import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LocalDataService } from '../service/local-data.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;

  constructor(private loginService: LoginService, private authService: SocialAuthService, private router: Router) { 
    this.user = new SocialUser;
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/user-dashboard']);
    }
  }

  signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authService.authState.subscribe(user => {
        this.user = user;
        var getData = {
          email: this.user.email,
          photo: this.user.photoUrl,
        };
        localStorage.setItem('id', JSON.stringify(getData));
        this.checkLogin();
      });
  }
}