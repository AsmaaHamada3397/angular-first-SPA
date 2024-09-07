import { Component, Input } from '@angular/core';
import { student, students } from '../Types/student-type';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

 @Input() students:students = [];

}
