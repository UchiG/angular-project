import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card/course-card.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
