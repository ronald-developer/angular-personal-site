export class Skill{
    public name : string;
    public fa_icon : string;
    public fa_class_selector : string;
    public level : number;
}

export class AboutMe{    
    public name : string;
    public title : string;
    public introductions : []=[];
    public whatIdo : string;
}

export class JobExperience{
    public position : string;
    public tenure : string;
    public responsibilities : []=[];
}
