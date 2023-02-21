import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFindJobComponent } from './vendor-find-job.component';

describe('VendorFindJobComponent', () => {
  let component: VendorFindJobComponent;
  let fixture: ComponentFixture<VendorFindJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorFindJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorFindJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
