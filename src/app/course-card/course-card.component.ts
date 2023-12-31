import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {
      
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output()
    courseSelected = new EventEmitter<Course>();
  
    constructor() { }
  
    ngOnInit(): void {

    }

    IsImageVisible() {
      return this.course && this.course.iconUrl;
    }

    onCourseViewed() {
      this.courseSelected.emit(this.course);
    }

    cardClasses() {
      if (this.course.category == 'BEGINNER') {
        return 'beginner'
      }
    }

    cardStyles() {
      return {
        'background-image': 'url(' + this.course.iconUrl + ')'
      }
    }
  }