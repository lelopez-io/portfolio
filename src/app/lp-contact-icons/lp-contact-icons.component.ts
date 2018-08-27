import { Component, OnInit } from '@angular/core';

import { VanillaTilt } from 'vanilla-tilt';

@Component({
  selector: 'app-lp-contact-icons',
  templateUrl: './lp-contact-icons.component.html',
  styleUrls: ['./lp-contact-icons.component.scss']
})
export class LpContactIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const li: NodeListOf<HTMLElement> = document.querySelectorAll('[data-tilt]');
    const liArray: HTMLElement[] = Array.prototype.slice.call(li);


    VanillaTilt.init( liArray, {
      perspective: 500,
      max: 20,
      speed: 400,
      glare: true,
      scale: 1.1,
      'max-glare': 0.5,
    });

  }
}
