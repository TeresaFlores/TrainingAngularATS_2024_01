import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSliderComponent } from './movies-slider.component';

describe('MoviesSliderComponent', () => {
  let component: MoviesSliderComponent;
  let fixture: ComponentFixture<MoviesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSliderComponent]
    });
    fixture = TestBed.createComponent(MoviesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
