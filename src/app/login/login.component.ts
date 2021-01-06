import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from '../model/User';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  googleUser!: SocialUser;

  constructor(
    private loginService: LoginService, 
    private authService: SocialAuthService, 
    private router: Router,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.checkLoginState();
  }

  checkLoginState() {
    if (localStorage.getItem('id') != null) {
      this.router.navigate(['/user-dashboard']);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe(user => {
      this.googleUser=user;
      if (this.googleUser!=null) {
        this.userService.getStudentByEmail(this.googleUser.email).subscribe(response=>{
        if(response.message=="yes"){
          this.user = response;
          localStorage.setItem('id', JSON.stringify(this.user));
          this.checkLoginState();
          }else if(response.message=="no"){
            this.router.navigate(['/notpermitted']);
          }
      });
        }
    });
    
  }
}