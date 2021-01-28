import { TestBed } from '@angular/core/testing';

import { GodparentpersonService } from './godparentperson.service';

describe('GodparentpersonService', () => {
  let service: GodparentpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodparentpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
