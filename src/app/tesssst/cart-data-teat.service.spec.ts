import { TestBed } from '@angular/core/testing';

import { CartDataTeatService } from './cart-data-teat.service';

describe('CartDataTeatService', () => {
  let service: CartDataTeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDataTeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
