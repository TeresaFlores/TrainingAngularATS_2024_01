import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCombosComponent } from './aside-combos.component';

describe('AsideCombosComponent', () => {
  let component: AsideCombosComponent;
  let fixture: ComponentFixture<AsideCombosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideCombosComponent]
    });
    fixture = TestBed.createComponent(AsideCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
