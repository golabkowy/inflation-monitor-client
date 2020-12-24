import {Component, OnInit} from '@angular/core';
import {LiquorData} from '../interfaces/liquor-data';
import {LiquorReviewsService} from '../services/liquor-reviews.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-liquor-reviews',
  templateUrl: './liquor-reviews.component.html',
  styleUrls: ['./liquor-reviews.component.css']
})
export class LiquorReviewsComponent implements OnInit {

  data: LiquorData[] = [];
  // model for form, it has to be object, no chance to put info into interface
  liquorDataModel: LiquorData = {
    author: '',
    name: '',
    type: '',
    rating: 0,
    review: ''
  };

  constructor(private httpClient: HttpClient, private liquorService: LiquorReviewsService) {
  }

  ngOnInit(): void {
    this.liquorService.getReviews().subscribe((result: LiquorData[]) => {
      this.data = result;
    }, error => {
      console.log(error);
    });
  }

  addLiquorReview(): any {
    // not resolvet yet, called just to fire up post request
    this.liquorService.addReview(this.liquorDataModel).subscribe();
  }

}
