import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminComponent } from './form-admin.component';

describe('FormAdminComponent', () => {
  let component: FormAdminComponent;
  let fixture: ComponentFixture<FormAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAdminComponent]
    });
    fixture = TestBed.createComponent(FormAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
