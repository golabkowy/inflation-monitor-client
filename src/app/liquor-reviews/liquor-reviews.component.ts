import {Component, OnInit} from '@angular/core';
import {LiquorData} from '../interfaces/liquor-data';
import {LiquorReviewsService} from '../services/liquor-reviews.service';

@Component({
  selector: 'app-liquor-reviews',
  templateUrl: './liquor-reviews.component.html',
  styleUrls: ['./liquor-reviews.component.css']
})
export class LiquorReviewsComponent implements OnInit {

  data: LiquorData[] = [];

  constructor(private liquorService: LiquorReviewsService) {
  }

  ngOnInit(): void {
    this.liquorService.getReviews().subscribe((result: LiquorData[]) => {
      this.data = result;
    }, error => {
      console.log(error);
    });
  }

}
