import { TestBed } from '@angular/core/testing';

import { CustomOrdersService } from './custom-orders.service';

describe('CustomOrdersService', () => {
  let service: CustomOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
