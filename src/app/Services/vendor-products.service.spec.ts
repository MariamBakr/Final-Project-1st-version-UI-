import { TestBed } from '@angular/core/testing';

import { VendorProductsService } from './vendor-products.service';

describe('VendorProductsService', () => {
  let service: VendorProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
