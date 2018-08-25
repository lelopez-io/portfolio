import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaHeroComponent } from './cta-hero.component';

describe('CtaHeroComponent', () => {
  let component: CtaHeroComponent;
  let fixture: ComponentFixture<CtaHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
