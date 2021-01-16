import { TestBed } from '@angular/core/testing';

import { CatequesistypeService } from './catequesistype.service';

describe('CatequesistypeService', () => {
  let service: CatequesistypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatequesistypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
