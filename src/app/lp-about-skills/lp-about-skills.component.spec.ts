import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpAboutSkillsComponent } from './lp-about-skills.component';

describe('LpAboutSkillsComponent', () => {
  let component: LpAboutSkillsComponent;
  let fixture: ComponentFixture<LpAboutSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpAboutSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpAboutSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
