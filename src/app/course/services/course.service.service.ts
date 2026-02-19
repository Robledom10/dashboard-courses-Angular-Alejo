import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Status } from '../enum/statusCourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [];
  private courses$ = new BehaviorSubject<Course[]>([]);
  private idCounter = 1;

  getCourses(): Observable<Course[]> {
    return this.courses$.asObservable();
  }

  addCourse(course: Omit<Course, 'id'>) {
    const newCourse: Course = { ...course, id: this.idCounter++ };
    this.courses.push(newCourse);
    this.courses$.next([...this.courses]);
  }

  toggleStatus(id: number) {
    const course = this.courses.find(c => c.id === id);

    if (course) {
      course.status = course.status === Status.ACTIVO ? Status.INACTIVO : Status.ACTIVO;
      this.courses$.next([...this.courses]);
    }
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
    this.courses$.next([...this.courses])
  }
}
