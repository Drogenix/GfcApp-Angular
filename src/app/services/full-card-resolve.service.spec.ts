import { TestBed } from '@angular/core/testing';

import { FullCardResolveService } from './full-card-resolve.service';

describe('FullCardResolveService', () => {
  let service: FullCardResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullCardResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
