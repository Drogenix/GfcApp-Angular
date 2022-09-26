import { TestBed } from '@angular/core/testing';

import { FighterProfileResolveService } from './fighter-profile-resolve.service';

describe('FighterProfileResolveService', () => {
  let service: FighterProfileResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FighterProfileResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
