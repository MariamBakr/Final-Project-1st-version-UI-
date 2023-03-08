import { TestBed } from '@angular/core/testing';

import { CustomerTrackOrderService } from './customer-track-order.service';

describe('CustomerTrackOrderService', () => {
  let service: CustomerTrackOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTrackOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
