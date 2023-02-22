import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpageForJobdetailsAndVendorsproposalsComponent } from './customerpage-for-jobdetails-and-vendorsproposals.component';

describe('CustomerpageForJobdetailsAndVendorsproposalsComponent', () => {
  let component: CustomerpageForJobdetailsAndVendorsproposalsComponent;
  let fixture: ComponentFixture<CustomerpageForJobdetailsAndVendorsproposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerpageForJobdetailsAndVendorsproposalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerpageForJobdetailsAndVendorsproposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
