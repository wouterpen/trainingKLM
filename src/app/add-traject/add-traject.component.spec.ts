import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrajectComponent } from './add-traject.component';

describe('AddTrajectComponent', () => {
  let component: AddTrajectComponent;
  let fixture: ComponentFixture<AddTrajectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrajectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrajectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
