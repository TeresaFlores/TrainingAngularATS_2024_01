import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPageComponent } from './contacto-page.component';

describe('ContactoPageComponent', () => {
  let component: ContactoPageComponent;
  let fixture: ComponentFixture<ContactoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoPageComponent]
    });
    fixture = TestBed.createComponent(ContactoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
