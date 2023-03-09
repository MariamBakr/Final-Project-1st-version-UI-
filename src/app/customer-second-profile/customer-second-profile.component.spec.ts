import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSecondProfileComponent } from './customer-second-profile.component';

describe('CustomerSecondProfileComponent', () => {
  let component: CustomerSecondProfileComponent;
  let fixture: ComponentFixture<CustomerSecondProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSecondProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSecondProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
