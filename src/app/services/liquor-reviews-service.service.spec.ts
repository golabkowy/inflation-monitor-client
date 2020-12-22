import { TestBed } from '@angular/core/testing';

import { LiquorReviewsServiceService } from './liquor-reviews-service.service';

describe('LiquorReviewsServiceService', () => {
  let service: LiquorReviewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquorReviewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
