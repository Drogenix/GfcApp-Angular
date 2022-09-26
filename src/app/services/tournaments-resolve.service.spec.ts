import { TestBed } from '@angular/core/testing';

import { TournamentsResolveService } from './tournaments-resolve.service';

describe('TournamentsResolveService', () => {
  let service: TournamentsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
