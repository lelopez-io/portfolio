import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpContactIconsComponent } from './lp-contact-icons.component';

describe('LpContactIconsComponent', () => {
  let component: LpContactIconsComponent;
  let fixture: ComponentFixture<LpContactIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpContactIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpContactIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
