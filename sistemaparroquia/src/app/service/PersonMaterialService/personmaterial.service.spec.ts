import { TestBed } from '@angular/core/testing';

import { PersonmaterialService } from './personmaterial.service';

describe('PersonmaterialService', () => {
  let service: PersonmaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonmaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
