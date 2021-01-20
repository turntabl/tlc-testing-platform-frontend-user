import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TakeTestComponent } from './pages/take-test/take-test.component';
import { ViewResultComponent } from './pages/view-result/view-result.component';
import { ReviewTestComponent } from './pages/review-test/review-test.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TestUnavailableComponent } from './pages/test-unavailable/test-unavailable.component';
import { SuccessfullySubmittedComponent } from './pages/successfully-submitted/successfully-submitted.component';
import { TestDoneComponent } from './modal/test-done/test-done.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestCoursesComponent } from './pages/test-courses/test-courses.component';
import { SubmitedComponent } from './pages/submited/submited.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginService } from './service/login.service';
import { NotpermittedComponent } from './pages/notpermitted/notpermitted.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TakeTestComponent,
    ViewResultComponent,
    ReviewTestComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    TestUnavailableComponent,
    SuccessfullySubmittedComponent,
    TestDoneComponent,
    UserDashboardComponent,
    TestCoursesComponent,
    SubmitedComponent,
    LoginComponent,
    NotpermittedComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  entryComponents: [TestDoneComponent],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '979127420535-ful4mfqkjia9us7e2fumt7gass0bbhkn.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    AuthService,
    AuthGuard,
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}