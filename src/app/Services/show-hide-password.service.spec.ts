import { TestBed } from '@angular/core/testing';

import { ShowHidePasswordService } from './show-hide-password.service';

describe('ShowHidePasswordService', () => {
  let service: ShowHidePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHidePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
