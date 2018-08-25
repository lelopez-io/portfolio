import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';

@Component({
  selector: 'app-cta-hero-typing',
  templateUrl: './cta-hero-typing.component.html',
  styleUrls: ['./cta-hero-typing.component.scss']
})
export class CtaHeroTypingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
          strings: ['landing pages.', 'corporate websites.', 'web applications.'],
          typeSpeed: 100,
          backSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          loop: true,
    };

    const typed = new Typed('.typing-element', options);
  }

}
