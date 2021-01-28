import { TestBed } from '@angular/core/testing';

import { GodparentService } from './godparent.service';

describe('GodparentService', () => {
  let service: GodparentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodparentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
