import { Component } from '@angular/core';
import { Level } from '../../enum/levelCourse.enum';
import { Status } from '../../enum/statusCourse';
import { CourseService } from '../../services/course.service.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  name = '';
  duration: number | null = null;
  level: Level = Level.BASICO
  status: Status = Status.ACTIVO;

  levels = Object.values(Level)
  states = Object.values(Status)

  constructor(private courseService: CourseService) { }

  saveCourses() {
    if (!this.name || !this.duration || this.duration <= 0) return;

    this.courseService.addCourse({
      name: this.name,
      duration: this.duration,
      level: this.level,
      status: this.status
    });

    this.name = '';
    this.duration = null;
    this.level = Level.BASICO;
    this.status = Status.ACTIVO;
  }
}
