import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JopdetailscardComponent } from './jopdetailscard.component';

describe('JopdetailscardComponent', () => {
  let component: JopdetailscardComponent;
  let fixture: ComponentFixture<JopdetailscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JopdetailscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JopdetailscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
