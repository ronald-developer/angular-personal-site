import { DataService } from './../../services/data.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {  
  constructor(private dataService : DataService, private detector : ChangeDetectorRef) {         
  }
  
  ngOnInit(): void {    
    this.update();
    if(!this.skills) this.dataService.dataProcessor.getMySkills();        
    if(this.aboutMe.introductions.length==0) this.dataService.dataProcessor.getAboutMe();  
  }

  update(){
    this.dataService.serviceNotification.subscribe(()=>this.detector.detectChanges());
  }

  get skills(){
    return this.dataService.mySkills;
  }

  get aboutMe(){
    return this.dataService.aboutMe;
  }

}

