import { TestBed } from '@angular/core/testing';

import { AlimentosService } from './alimentos.service';

describe('AlimentosService', () => {
  let service: AlimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
