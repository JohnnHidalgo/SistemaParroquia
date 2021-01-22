import { TestBed } from '@angular/core/testing';

import { PersondocumentService } from './persondocument.service';

describe('PersondocumentService', () => {
  let service: PersondocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersondocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
