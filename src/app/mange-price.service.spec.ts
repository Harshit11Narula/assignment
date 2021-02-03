import { TestBed } from '@angular/core/testing';

import { MangePriceService } from './mange-price.service';

describe('MangePriceService', () => {
  let service: MangePriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangePriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
