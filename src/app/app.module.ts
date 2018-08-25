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

@NgModule({
  declarations: [
    AppComponent,
    CtaHeroComponent,
    CtaHeroTypingComponent,
    LpAboutComponent,
    LandingPageComponent,
    LpAboutSkillsComponent
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
