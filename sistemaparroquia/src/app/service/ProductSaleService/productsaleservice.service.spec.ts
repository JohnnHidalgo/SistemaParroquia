import { TestBed } from '@angular/core/testing';

import { ProductsaleserviceService } from './productsaleservice.service';

describe('ProductsaleserviceService', () => {
  let service: ProductsaleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsaleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
