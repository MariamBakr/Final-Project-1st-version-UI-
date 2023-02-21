import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateCustomOrderComponent } from './customer-create-custom-order.component';

describe('CustomerCreateCustomOrderComponent', () => {
  let component: CustomerCreateCustomOrderComponent;
  let fixture: ComponentFixture<CustomerCreateCustomOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCreateCustomOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCreateCustomOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
