import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderDetailsForVendorComponent } from './custom-order-details-for-vendor.component';

describe('CustomOrderDetailsForVendorComponent', () => {
  let component: CustomOrderDetailsForVendorComponent;
  let fixture: ComponentFixture<CustomOrderDetailsForVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOrderDetailsForVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOrderDetailsForVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
