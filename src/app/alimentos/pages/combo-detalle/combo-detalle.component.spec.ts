import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboDetalleComponent } from './combo-detalle.component';

describe('ComboDetalleComponent', () => {
  let component: ComboDetalleComponent;
  let fixture: ComponentFixture<ComboDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboDetalleComponent]
    });
    fixture = TestBed.createComponent(ComboDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
