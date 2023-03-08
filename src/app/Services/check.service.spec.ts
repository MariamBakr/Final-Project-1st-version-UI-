import { TestBed } from '@angular/core/testing';

import { CHECKService } from './check.service';

describe('CHECKService', () => {
  let service: CHECKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CHECKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
