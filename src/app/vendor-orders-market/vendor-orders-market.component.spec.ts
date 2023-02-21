import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOrdersMarketComponent } from './vendor-orders-market.component';

describe('VendorOrdersMarketComponent', () => {
  let component: VendorOrdersMarketComponent;
  let fixture: ComponentFixture<VendorOrdersMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOrdersMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorOrdersMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
