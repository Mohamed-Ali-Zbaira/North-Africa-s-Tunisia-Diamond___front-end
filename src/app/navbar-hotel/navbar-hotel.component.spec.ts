import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHotelComponent } from './navbar-hotel.component';

describe('NavbarHotelComponent', () => {
  let component: NavbarHotelComponent;
  let fixture: ComponentFixture<NavbarHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarHotelComponent]
    });
    fixture = TestBed.createComponent(NavbarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
