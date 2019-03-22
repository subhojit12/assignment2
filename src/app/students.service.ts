import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  
  students=[
    {
    rn:1,
	  birthDate : 17,
	  firstName: 'Subhojit',
	  lastName: 'Bhattacharjee',
	  parentName: 'A.K. Bhattacharjee',
	  parentPhone:'8904074607',
	  address:'Bangalore'
    },
    {
      rn:2,
      birthDate : 5,
      firstName: 'Raj',
      lastName: 'Singh',
      parentName: 'A Singh',
      parentPhone:'8904074607',
      address:'Bangalore'
    }
  ]
  getStudents(){
    if(localStorage.getItem('students')!=null){
      this.students=JSON.parse(localStorage.getItem('students'))
      return  this.students
    }else{
      return this.students;
    }
  }
  addStudent(student){
    this.students.push(student);
    localStorage.setItem('students',JSON.stringify(this.students));
  }
  deleteStudent(rn){
    console.log('called')
    for(var i=0;i<this.students.length;i++){
      if(rn == this.students[i].rn){
        this.students.splice(i,1);
        localStorage.setItem('students',JSON.stringify(this.students));
        break;
      }
    }
  }
  editStudent(student){
  
    for(var i=0;i<this.students.length;i++){
      if(student.rn==this.students[i].rn){
        this.students[i]=student;
        localStorage.setItem('students',JSON.stringify(this.students));
        break;
      }
    }
  }
  getStudentByRn(rn){
    for(var i =0;i<this.students.length;i++){
      if(rn == this.students[i].rn){
        return this.students[i];
      }
    }
  }
  deleteAllStudents(){
    localStorage.removeItem('students');
    this.students=[];
  }
}
