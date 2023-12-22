import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHotelComponent } from './form-hotel.component';

describe('FormHotelComponent', () => {
  let component: FormHotelComponent;
  let fixture: ComponentFixture<FormHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHotelComponent]
    });
    fixture = TestBed.createComponent(FormHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
