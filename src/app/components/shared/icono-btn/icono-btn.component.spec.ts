import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoBtnComponent } from './icono-btn.component';

describe('IconoBtnComponent', () => {
  let component: IconoBtnComponent;
  let fixture: ComponentFixture<IconoBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconoBtnComponent]
    });
    fixture = TestBed.createComponent(IconoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
