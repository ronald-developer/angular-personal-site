import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent implements OnInit {
  @Input('fa_icon') fa_icon : string;
  @Input('fa_class_selector') fa_class_selector : string;
  @Input('name') name : string;
  @Input('level') level : number;
  skillLevels = Array(5).fill(0).map((val,index)=>{
    let i =index+1;
    return { pos : i , selector: 'bg-level-'+ i};
  });
  constructor() {     
  }

  ngOnInit(): void {
  }

}
