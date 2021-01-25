import { TestBed } from '@angular/core/testing';

import { ParentpersonService } from './parentperson.service';

describe('ParentpersonService', () => {
  let service: ParentpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
