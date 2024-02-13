import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraComponent } from './cartelera.component';

describe('CarteleraComponent', () => {
  let component: CarteleraComponent;
  let fixture: ComponentFixture<CarteleraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteleraComponent]
    });
    fixture = TestBed.createComponent(CarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
