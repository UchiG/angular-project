import { Component, ViewChild, ElementRef, QueryList } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { AfterViewInit } from '@angular/core';
import { viewChildren } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

  @viewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  constructor() {

  }

  ngAfterViewInit() {
    console.log(this.cards);

  }

    onCourseSelected(course:Course) {

    }
}
