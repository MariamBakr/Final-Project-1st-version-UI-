import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProductVendorComponent } from './edite-product-vendor.component';

describe('EditeProductVendorComponent', () => {
  let component: EditeProductVendorComponent;
  let fixture: ComponentFixture<EditeProductVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeProductVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeProductVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
