import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocotrAppointmentComponent } from './docotr-appointment.component';

describe('DocotrAppointmentComponent', () => {
  let component: DocotrAppointmentComponent;
  let fixture: ComponentFixture<DocotrAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocotrAppointmentComponent]
    });
    fixture = TestBed.createComponent(DocotrAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
