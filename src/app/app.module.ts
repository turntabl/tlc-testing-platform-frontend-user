import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TakeTestComponent } from './pages/take-test/take-test.component';
import { ViewResultComponent } from './pages/view-result/view-result.component';
import { ReviewTestComponent } from './pages/review-test/review-test.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeTestComponent,
    ViewResultComponent,
    ReviewTestComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
