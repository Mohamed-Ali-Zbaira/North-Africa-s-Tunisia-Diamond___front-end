import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelModalComponent } from './update-hotel-modal.component';

describe('UpdateHotelModalComponent', () => {
  let component: UpdateHotelModalComponent;
  let fixture: ComponentFixture<UpdateHotelModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHotelModalComponent]
    });
    fixture = TestBed.createComponent(UpdateHotelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
