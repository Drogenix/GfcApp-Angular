import { TestBed } from '@angular/core/testing';

import { EndedTournamentsResolveService } from './ended-tournaments-resolve.service';

describe('EndedTournamentsResolveService', () => {
  let service: EndedTournamentsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndedTournamentsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
