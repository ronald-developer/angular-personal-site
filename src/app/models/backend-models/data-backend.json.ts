import { APISource } from './api-source';
import { IBackEndModel } from './data-processor';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Skill, AboutMe, JobExperience } from '../personal/data.models';
import { catchError, map, delay } from 'rxjs/operators';
import { ServiceNotificationModel } from '../service-notification.model';

export class DataBackendJSON implements IBackEndModel{
    constructor(private http: HttpClient, private notif : Subject<ServiceNotificationModel>){        
    }

    getMySkills(): Observable<Skill[]> {  
        var skills : Skill[];
        this.notif.next(new ServiceNotificationModel(false,APISource.Skills,undefined));
        return this.http.get('./assets/data/skills.json').pipe(
            map((data:any)=>{    
                skills=data;            
                this.notif.next(new ServiceNotificationModel(true,APISource.Skills,skills));
                return skills;
            })
        );
    }

    getAboutMe(): Observable<AboutMe> {
        
        this.notif.next(new ServiceNotificationModel(false,APISource.AboutMe,new AboutMe()));
        return this.http.get('./assets/data/about-me.json').pipe(
            map((data:AboutMe)=>{
                              
                this.notif.next(new ServiceNotificationModel(true,APISource.AboutMe,data));
                return data;
            })
        );
    }
    
    getJobExperience(): Observable<JobExperience[]> {
        
        this.notif.next(new ServiceNotificationModel(false,APISource.JobExperience,[]));
        return this.http.get('./assets/data/job-experience.json').pipe(
            map((data:JobExperience[])=>{                              
                this.notif.next(new ServiceNotificationModel(true,APISource.JobExperience,data));
                return data;
            })
        );
    }
}