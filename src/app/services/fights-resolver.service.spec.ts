import { TestBed } from '@angular/core/testing';

import { FightsResolveService } from './fights-resolver.service';

describe('FightsResolverService', () => {
  let service: FightsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
