import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
  addStudent(student){
    this.studentService.addStudent(student);
    this.router.navigate(['student']);
  }
  ngOnInit() {
  }

}
