import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesComponent } from './cines.component';

describe('CinesComponent', () => {
  let component: CinesComponent;
  let fixture: ComponentFixture<CinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinesComponent]
    });
    fixture = TestBed.createComponent(CinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
