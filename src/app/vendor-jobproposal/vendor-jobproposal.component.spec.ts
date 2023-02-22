import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorJobproposalComponent } from './vendor-jobproposal.component';

describe('VendorJobproposalComponent', () => {
  let component: VendorJobproposalComponent;
  let fixture: ComponentFixture<VendorJobproposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorJobproposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorJobproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
