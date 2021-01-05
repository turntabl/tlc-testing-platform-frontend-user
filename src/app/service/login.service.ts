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

  checkLoginState() {
    if (localStorage.getItem('id') == null) {
      this.router.navigate(['/login']);
    }
  }

  ok(){
    this.collect = localStorage.getItem("id");
    return JSON.parse(this.collect).photo;
  }

  isLogin(): boolean{
    if ( localStorage.getItem("id")!=null ) {
      return true;
    }else{
    return false;
    }
  }

  hasUser(){

  }
}