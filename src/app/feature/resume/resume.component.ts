import { DataService } from './../../services/data.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ResumeComponent implements OnInit {

  constructor(private dataService : DataService,private detector : ChangeDetectorRef) {     
  }

  ngOnInit(): void {    
    this.update();
    if(!this.jobExperience) this.dataService.dataProcessor.getJobExperience();        
    if(this.aboutMe.introductions.length==0) this.dataService.dataProcessor.getAboutMe();  
  }

  update(){
    this.dataService.serviceNotification.subscribe(()=>this.detector.detectChanges());
  }

  get aboutMe(){
    return this.dataService.aboutMe;
  }

  get jobExperience(){
    return this.dataService.jobExperience;
  }


}
