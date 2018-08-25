import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaHeroTypingComponent } from './cta-hero-typing.component';

describe('CtaHeroTypingComponent', () => {
  let component: CtaHeroTypingComponent;
  let fixture: ComponentFixture<CtaHeroTypingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaHeroTypingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaHeroTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
