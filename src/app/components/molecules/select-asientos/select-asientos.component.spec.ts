import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAsientosComponent } from './select-asientos.component';

describe('SelectAsientosComponent', () => {
  let component: SelectAsientosComponent;
  let fixture: ComponentFixture<SelectAsientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAsientosComponent]
    });
    fixture = TestBed.createComponent(SelectAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
