import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  collect!: any;
  id!: any;
  
  constructor( private authService: SocialAuthService, private http:HttpClient, private router: Router ) { }

  signout(): void {
    this.authService.signOut();
    localStorage.removeItem("id");
    this.router.navigate(['login']);
  }

  checkLogin(){
    if (localStorage.getItem("id")!=null) {
      this.collect = localStorage.getItem("id");
      return JSON.parse(this.collect).student_id;
    }
  }

  isLogin(): boolean{
    if ( localStorage.getItem("id")!=null ) {
      return true;
    }else{
    return false;
    }
  }

  notLogin(){
    if (this.checkLogin()==null) {
      this.router.navigate(['/login']);
    }
  }
}