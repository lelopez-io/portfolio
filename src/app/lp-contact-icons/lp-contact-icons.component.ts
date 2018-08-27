import { Component, OnInit } from '@angular/core';

import { VanillaTilt } from 'vanilla-tilt';
import { init } from 'vanilla-tilt';



@Component({
  selector: 'app-lp-contact-icons',
  templateUrl: './lp-contact-icons.component.html',
  styleUrls: ['./lp-contact-icons.component.scss']
})
export class LpContactIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const li: NodeListOf<HTMLElement> = document.querySelectorAll('.logo');
    const liArray: HTMLElement[] = Array.prototype.slice.call(li);


    init( liArray, {
      max: .05,
      perspective: 10000,
      speed: 100,
      glare: true,
    });

  }
}
