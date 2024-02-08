import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodModalComponent } from './food-modal.component';

describe('FoodModalComponent', () => {
  let component: FoodModalComponent;
  let fixture: ComponentFixture<FoodModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodModalComponent]
    });
    fixture = TestBed.createComponent(FoodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
