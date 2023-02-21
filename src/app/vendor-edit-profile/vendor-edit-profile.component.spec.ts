import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditProfileComponent } from './vendor-edit-profile.component';

describe('VendorEditProfileComponent', () => {
  let component: VendorEditProfileComponent;
  let fixture: ComponentFixture<VendorEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
