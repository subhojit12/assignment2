import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'addstudent',component:AddComponent},
  {path:'editstudent/:rn',component:EditStudentComponent},
  {path:'student',component:StudentComponent},
  {path:'',redirectTo:'student',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
