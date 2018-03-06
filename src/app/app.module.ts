import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { UdemyCourseComponent } from './components/udemy-course/udemy-course.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    UdemyCourseComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
