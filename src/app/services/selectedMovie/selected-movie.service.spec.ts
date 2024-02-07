import { TestBed } from '@angular/core/testing';

import { SelectedMovieService } from './selected-movie.service';

describe('SelectedMovieService', () => {
  let service: SelectedMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
