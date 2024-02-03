import { TestBed } from '@angular/core/testing';

import { PromosService } from './promos.service';

describe('PromosService', () => {
  let service: PromosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
