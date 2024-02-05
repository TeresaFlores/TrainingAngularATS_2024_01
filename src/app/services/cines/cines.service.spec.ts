import { TestBed } from '@angular/core/testing';

import { CinesService } from './cines.service';

describe('CinesService', () => {
  let service: CinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
