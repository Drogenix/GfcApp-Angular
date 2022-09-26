import { TestBed } from '@angular/core/testing';

import { RatingsResolveService } from './ratings-resolve.service';

describe('RatingsResolveService', () => {
  let service: RatingsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
