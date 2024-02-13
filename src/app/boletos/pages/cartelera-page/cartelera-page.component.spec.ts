import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraPageComponent } from './cartelera-page.component';

describe('CarteleraPageComponent', () => {
  let component: CarteleraPageComponent;
  let fixture: ComponentFixture<CarteleraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteleraPageComponent]
    });
    fixture = TestBed.createComponent(CarteleraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
