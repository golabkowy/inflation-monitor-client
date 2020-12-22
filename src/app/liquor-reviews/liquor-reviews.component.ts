import {Component, OnInit} from '@angular/core';
import {LiquorData} from '../interfaces/liquor-data';

@Component({
  selector: 'app-liquor-reviews',
  templateUrl: './liquor-reviews.component.html',
  styleUrls: ['./liquor-reviews.component.css']
})
export class LiquorReviewsComponent implements OnInit {

  data: LiquorData[] = [
    {author: 'szynom', type: 'wino', name: 'angelo-mocne', review: 'klasyka sama w sobie, co tu komentowac', rating: 10},
    {author: 'piotrekh', type: 'piwo', name: 'harnas', review: 'gowno ale dla studenta dobre', rating: 10},
    {author: 'nemo', type: 'wodka', name: 'ulgowa zubr', review: 'najlpiej spozyc z dużą ilością lodu', rating: 10},
    {author: 'gamil', type: 'whisky', name: 'monkey shopulder', review: 'droga, dobra, smaczna', rating: 10},
    {author: 'golomp', type: 'miod pitny', name: 'trojniaczek', review: 'bardzo dobry miut', rating: 10}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
