
import { MainComponent } from './feature/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './feature/resume/resume.component';


const routes: Routes = [
  {
    path:'',    
    component: MainComponent   
  },  
  {
    path:'home',
    component: MainComponent
  },
  {
    path:'resume',
    component: ResumeComponent
  },
  {
      path: '**',
      redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
