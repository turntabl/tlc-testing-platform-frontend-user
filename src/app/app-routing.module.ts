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

const routes: Routes = [
  { path: 'courses', component: TestCoursesComponent },
  { path: 'take-test', component: TakeTestComponent },
  { path: 'submited', component: SubmitedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view-result', component: ViewResultComponent },
  { path: 'review-test', component: ReviewTestComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'test-unavailable', component: TestUnavailableComponent },
  { path: 'test-submitted', component: SuccessfullySubmittedComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'notpermitted', component: NotpermittedComponent },
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
