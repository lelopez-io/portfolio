import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

@Component({
  selector: 'app-lp-about-skills',
  templateUrl: './lp-about-skills.component.html',
  styleUrls: ['./lp-about-skills.component.scss']
})
export class LpAboutSkillsComponent implements OnInit {
  skills: Skill[] = [
    {title: 'Ideas',
      desc: 'I collaborate with clients to nurture and transform an idea into a well thought out design specific to their needs'},
    {title: 'UX/UI',
      desc: 'I provide an amazing user experience by creating user interfaces and websites centered around content'
    },
    {title: 'Code',
      desc: 'I can use a variaty of CMS software and I love coding from scratch. No matter the problem, I’ll find a solution.'
    },
    {title: 'Communication',
      desc: 'I understand the importance of maintaining clear communication and keeping clients up to date with progress'
    },
    {title: 'Time',
    // tslint:disable-next-line:max-line-length
      desc: 'I value my client’s time and always strive to work efficiently on all projects. Results are always delivered with great punctuality.'
    },
    {title: 'Organization',
      desc: 'I believe in moving through each stage of a project with great care in order to keep them on-track and under control'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
