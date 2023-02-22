import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorHomepageComponent } from './vendor-homepage.component';

describe('VendorHomepageComponent', () => {
  let component: VendorHomepageComponent;
  let fixture: ComponentFixture<VendorHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
