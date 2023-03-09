import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorJopsComponent } from './vendor-jops.component';

describe('VendorJopsComponent', () => {
  let component: VendorJopsComponent;
  let fixture: ComponentFixture<VendorJopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorJopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorJopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
