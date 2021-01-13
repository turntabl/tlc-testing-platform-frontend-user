import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/model/User';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    user!: User;
    googleUser!: SocialUser;
    collect: any;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  authUser = new BehaviorSubject<any>(null);
  loader:boolean=false;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private userService: UserService
  ) {}

    signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe(user => {
      this.googleUser=user;
      if (this.googleUser!=null) {
        this.loader = true;
        this.userService.getStudentByEmail(this.googleUser.email).subscribe(response=>{
        if(response.message=="yes"){
          this.loggedIn.next(true);
          this.user = response;
          this.authUser.next(response);
          localStorage.setItem('id', JSON.stringify(this.user));
          this.router.navigate(['/user-dashboard'])
          }else if(response.message=="no"){
            this.loggedIn.next(false);
            this.router.navigate(['/notpermitted']);
          }
      });
        }
    });
    
  }

  logout() {
    this.loggedIn.next(false);
    this.authUser.next(null);
    localStorage.removeItem("id");
    this.router.navigate(['/login']);
  }

  autoLogin() {
    const userData = localStorage.getItem('id');
    if (!userData) {
       this.authUser.next(null);
       return;
    }
    this.loggedIn.next(true);
    this.authUser.next(userData);
   }
}