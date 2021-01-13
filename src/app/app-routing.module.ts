import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeTestComponent } from './pages/take-test/take-test.component';
import { ViewResultComponent } from './pages/view-result/view-result.component';
import { ReviewTestComponent } from './pages/review-test/review-test.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TestUnavailableComponent } from './pages/test-unavailable/test-unavailable.component';
import { SuccessfullySubmittedComponent } from './pages/successfully-submitted/successfully-submitted.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TestCoursesComponent } from './pages/test-courses/test-courses.component';
import { SubmitedComponent } from './pages/submited/submited.component';
import { LoginComponent } from './login/login.component';
import { NotpermittedComponent } from "./pages/notpermitted/notpermitted.component";
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'courses', component: TestCoursesComponent, canActivate: [AuthGuard] },
  { path: 'take-test', component: TakeTestComponent, canActivate: [AuthGuard] },
  { path: 'submited', component: SubmitedComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'view-result', component: ViewResultComponent, canActivate: [AuthGuard] },
  { path: 'review-test', component: ReviewTestComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'test-unavailable', component: TestUnavailableComponent, canActivate: [AuthGuard] },
  { path: 'test-submitted', component: SuccessfullySubmittedComponent, canActivate: [AuthGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'notpermitted', component: NotpermittedComponent },
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
