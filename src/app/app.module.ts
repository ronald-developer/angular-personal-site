import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './feature/navigation-header/navigation-header.component';
import { MainComponent } from './feature/main/main.component';
import { SkillIconComponent } from './feature/skill-icon/skill-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './feature/resume/resume.component';
import { BlogComponent } from './feature/blog/blog.component';
import { ContactMeComponent } from './feature/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    MainComponent,
    SkillIconComponent,
    ResumeComponent,
    BlogComponent,
    ContactMeComponent
  ],
  imports: [    
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
