import { TestBed } from '@angular/core/testing';

import { CatequistaserviceService } from './catequistaservice.service';

describe('CatequistaserviceService', () => {
  let service: CatequistaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatequistaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
