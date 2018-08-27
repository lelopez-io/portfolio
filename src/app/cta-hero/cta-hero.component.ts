import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cta-hero',
  templateUrl: './cta-hero.component.html',
  styleUrls: ['./cta-hero.component.scss']
})
export class CtaHeroComponent implements OnInit {
   ctaButton = 'Yes, I\'m Available For Hire';

  constructor() { }

  ngOnInit() {


  }

}
