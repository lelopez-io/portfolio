import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CtaHeroComponent } from './cta-hero/cta-hero.component';
import { CtaHeroTypingComponent } from './cta-hero-typing/cta-hero-typing.component';
import { LpAboutComponent } from './lp-about/lp-about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LpAboutSkillsComponent } from './lp-about-skills/lp-about-skills.component';
import { LpInfoComponent } from './lp-info/lp-info.component';
import { LpPitchComponent } from './lp-pitch/lp-pitch.component';
import { LpContactComponent } from './lp-contact/lp-contact.component';
import { LpContactIconsComponent } from './lp-contact-icons/lp-contact-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    CtaHeroComponent,
    CtaHeroTypingComponent,
    LpAboutComponent,
    LandingPageComponent,
    LpAboutSkillsComponent,
    LpInfoComponent,
    LpPitchComponent,
    LpContactComponent,
    LpContactIconsComponent
  ],
  imports: [
    BrowserModule,

    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
