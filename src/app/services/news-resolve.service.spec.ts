import { TestBed } from '@angular/core/testing';

import { NewsResolveService } from './news-resolve.service';

describe('NewsResolveService', () => {
  let service: NewsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
