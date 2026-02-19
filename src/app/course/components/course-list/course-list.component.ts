import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { CourseService } from '../../services/course.service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => this.courses = data)
  }

  toggleStatus(id: number) {
    this.courseService.toggleStatus(id);
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id)
  }
}
