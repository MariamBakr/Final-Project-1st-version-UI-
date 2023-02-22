import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProposalSendToCustomerComponent } from './vendor-proposal-send-to-customer.component';

describe('VendorProposalSendToCustomerComponent', () => {
  let component: VendorProposalSendToCustomerComponent;
  let fixture: ComponentFixture<VendorProposalSendToCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorProposalSendToCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorProposalSendToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
