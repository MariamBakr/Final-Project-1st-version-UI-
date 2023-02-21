import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrackOrderComponent } from './customer-track-order.component';

describe('CustomerTrackOrderComponent', () => {
  let component: CustomerTrackOrderComponent;
  let fixture: ComponentFixture<CustomerTrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTrackOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
