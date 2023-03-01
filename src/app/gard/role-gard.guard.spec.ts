import { TestBed } from '@angular/core/testing';

import { RoleGardGuard } from './role-gard.guard';

describe('RoleGardGuard', () => {
  let guard: RoleGardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleGardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
