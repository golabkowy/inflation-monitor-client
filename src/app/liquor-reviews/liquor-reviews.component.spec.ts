import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LiquorReviewsComponent} from './liquor-reviews.component';

describe('LiquorReviewsComponent', () => {
  let component: LiquorReviewsComponent;
  let fixture: ComponentFixture<LiquorReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiquorReviewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
