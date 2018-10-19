import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlannerComponent } from './landing-planner.component';

describe('LandingPlannerComponent', () => {
  let component: LandingPlannerComponent;
  let fixture: ComponentFixture<LandingPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
