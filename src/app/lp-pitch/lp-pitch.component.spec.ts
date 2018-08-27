import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpPitchComponent } from './lp-pitch.component';

describe('LpPitchComponent', () => {
  let component: LpPitchComponent;
  let fixture: ComponentFixture<LpPitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpPitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
