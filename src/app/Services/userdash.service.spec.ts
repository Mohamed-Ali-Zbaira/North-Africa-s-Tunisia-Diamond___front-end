import { TestBed } from '@angular/core/testing';

import { UserdashService } from './userdash.service';

describe('UserdashService', () => {
  let service: UserdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
