import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertrackorderComponent } from './customertrackorder.component';

describe('CustomertrackorderComponent', () => {
  let component: CustomertrackorderComponent;
  let fixture: ComponentFixture<CustomertrackorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomertrackorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomertrackorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
