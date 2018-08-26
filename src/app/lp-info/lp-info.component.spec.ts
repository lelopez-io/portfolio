import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpInfoComponent } from './lp-info.component';

describe('LpInfoComponent', () => {
  let component: LpInfoComponent;
  let fixture: ComponentFixture<LpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
