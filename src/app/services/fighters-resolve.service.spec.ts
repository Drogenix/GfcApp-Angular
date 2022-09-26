import { TestBed } from '@angular/core/testing';

import { FightersResolveService } from './fighters-resolve.service';

describe('FightersResolveService', () => {
  let service: FightersResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightersResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
