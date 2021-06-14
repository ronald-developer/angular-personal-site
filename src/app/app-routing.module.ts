import { ContactMeComponent } from './feature/contact-me/contact-me.component';
import { BlogComponent } from './feature/blog/blog.component';

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
    path:'blog',
    component: BlogComponent
  },
  {
    path:'contact-me',
    component: ContactMeComponent
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
