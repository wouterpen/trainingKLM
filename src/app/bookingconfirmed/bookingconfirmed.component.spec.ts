import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingconfirmedComponent } from './bookingconfirmed.component';

describe('BookingconfirmedComponent', () => {
  let component: BookingconfirmedComponent;
  let fixture: ComponentFixture<BookingconfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingconfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
