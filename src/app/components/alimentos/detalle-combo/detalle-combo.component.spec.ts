import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComboComponent } from './detalle-combo.component';

describe('DetalleComboComponent', () => {
  let component: DetalleComboComponent;
  let fixture: ComponentFixture<DetalleComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleComboComponent]
    });
    fixture = TestBed.createComponent(DetalleComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
