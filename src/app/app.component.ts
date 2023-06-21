import { Component, ViewChild, ElementRef } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

  @viewChildren(CourseCardComponent)
  cards;

  constructor() {

  }

  ngAfterViewInit() {


  }

    onCourseSelected(course:Course) {

    }
}
