import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCompletedComponent } from './purchase-completed.component';

describe('PurchaseCompletedComponent', () => {
  let component: PurchaseCompletedComponent;
  let fixture: ComponentFixture<PurchaseCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseCompletedComponent]
    });
    fixture = TestBed.createComponent(PurchaseCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
