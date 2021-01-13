import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
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
    private authService:AuthService
    ) {}

  ngOnInit(): void {
  }

  get loader(){
    return this.authService.loader;
  }

  onSubmit() {
    this.authService.signInWithGoogle();
}
}