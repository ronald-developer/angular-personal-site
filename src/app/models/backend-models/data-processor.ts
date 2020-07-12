import { AboutMe, JobExperience } from './../personal/data.models';
import { Observable } from 'rxjs';
import { Skill } from '../personal/data.models';

export class DataProcessor{
    constructor(private backendModel : IBackEndModel){       
    }

    getMySkills(){
        this.backendModel.getMySkills().subscribe();
    }

    getAboutMe(){
        this.backendModel.getAboutMe().subscribe();
    }

    getJobExperience(){
        this.backendModel.getJobExperience().subscribe();
    }
}

export interface IBackEndModel{
    getMySkills():Observable<Skill[]>;
    getAboutMe():Observable<AboutMe>;
    getJobExperience():Observable<JobExperience[]>;
}