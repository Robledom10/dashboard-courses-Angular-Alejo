import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseFormComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [   // <-- Exporta para que otros módulos lo puedan usar
    CourseFormComponent,
    CourseListComponent
  ]
})
export class CourseModule { }
