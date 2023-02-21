import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMonitorJobsComponent } from './customer-monitor-jobs.component';

describe('CustomerMonitorJobsComponent', () => {
  let component: CustomerMonitorJobsComponent;
  let fixture: ComponentFixture<CustomerMonitorJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMonitorJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMonitorJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
