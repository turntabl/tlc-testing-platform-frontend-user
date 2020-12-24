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
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [TestDoneComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
