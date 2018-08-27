import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpContactComponent } from './lp-contact.component';

describe('LpContactComponent', () => {
  let component: LpContactComponent;
  let fixture: ComponentFixture<LpContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
