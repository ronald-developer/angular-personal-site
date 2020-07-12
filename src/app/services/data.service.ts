import { AboutMe, JobExperience } from './../models/personal/data.models';
import { ServiceNotificationModel } from './../models/service-notification.model';
import { DataProcessor } from './../models/backend-models/data-processor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, observable } from 'rxjs';
import { DataBackendJSON } from '../models/backend-models/data-backend.json';
import { Skill } from '../models/personal/data.models';
import { APISource } from '../models/backend-models/api-source';
@Injectable({
    providedIn:'root'
})
export class DataService {    

    dataProcessor : DataProcessor;
    serviceNotification =new Subject<ServiceNotificationModel>();

    mySkills : Skill[];
    aboutMe = new AboutMe();
    jobExperience : JobExperience[];

    constructor(private http: HttpClient ) {     
        this.dataProcessor = new DataProcessor(new DataBackendJSON(http,this.serviceNotification));
        this.update();
    }

    private result(n:ServiceNotificationModel){
        if(n.isCompleted){                        
            return n.result;
        }
        return undefined;
    }

    update(){
        this.serviceNotification.subscribe(s=>{                         
            switch(s.source){
                case APISource.Skills:
                    this.mySkills = this.result(s);
                    break;
                case APISource.AboutMe:                    
                    this.aboutMe = this.result(s);                    
                    break;
                case APISource.JobExperience:                    
                    this.jobExperience = this.result(s);                    
                    break;
            }
        });
    }
 
}
