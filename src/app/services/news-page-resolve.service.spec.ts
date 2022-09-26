import { TestBed } from '@angular/core/testing';

import { NewsPageResolveService } from './news-page-resolve.service';

describe('NewsPageResolveService', () => {
  let service: NewsPageResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsPageResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
