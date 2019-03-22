import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private studentService:StudentsService,private router:Router) { }
  rn:number;
  private sub : any;
  student:any
  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      this.rn = +params['rn'];
      this.student = this.studentService.getStudentByRn(this.rn)
    })
  }
  editStudent(student){
    this.studentService.editStudent(student);
    this.router.navigate(['/student']);
  }
  

}
