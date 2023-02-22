import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToMarketFormComponent } from './add-to-market-form.component';

describe('AddToMarketFormComponent', () => {
  let component: AddToMarketFormComponent;
  let fixture: ComponentFixture<AddToMarketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToMarketFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToMarketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
