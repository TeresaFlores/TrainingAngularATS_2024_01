import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMovieComponent } from './data-movie.component';

describe('DataMovieComponent', () => {
  let component: DataMovieComponent;
  let fixture: ComponentFixture<DataMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataMovieComponent]
    });
    fixture = TestBed.createComponent(DataMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
