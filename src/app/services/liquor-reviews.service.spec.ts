import {TestBed} from '@angular/core/testing';

import {LiquorReviewsService} from './liquor-reviews.service';

describe('LiquorReviewsService', () => {
  let service: LiquorReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquorReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
