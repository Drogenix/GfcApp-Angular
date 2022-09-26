import { TestBed } from '@angular/core/testing';

import { MainResolveService } from './main-resolve.service';

describe('MainResolveService', () => {
  let service: MainResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
