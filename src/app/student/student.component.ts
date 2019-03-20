import { Component, OnInit } from '@angular/core';
import { MenuComponent }  from '../menu/menu.component';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentsService,private router:Router) { }
  student={
    rn:0,
    birthDate : 0,
    firstName: '',
    lastName: '',
    parentName: '',
    parentPhone:'',
    address:''
  }
  students=this.studentService.getStudents();
  deleteStudent(rn){
    this.studentService.deleteStudent(rn);
  }
  editStudent(rn){
    this.router.navigate(['/editstudent/',rn])
  }
  ngOnInit() {
  }

}
