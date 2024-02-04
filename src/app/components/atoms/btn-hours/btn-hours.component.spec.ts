import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHoursComponent } from './btn-hours.component';

describe('BtnHoursComponent', () => {
  let component: BtnHoursComponent;
  let fixture: ComponentFixture<BtnHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnHoursComponent]
    });
    fixture = TestBed.createComponent(BtnHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
