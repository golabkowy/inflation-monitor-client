import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LiquorData} from '../interfaces/liquor-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiquorReviewsService {

  constructor(private httpClient: HttpClient) {
  }

  getReviews(): Observable<LiquorData[]> {
    return this.httpClient.get<LiquorData[]>('http://localhost:8080/reviews/all', {withCredentials: true});
  }

// importante! http requesty a przynajmniej posty z HttpClient modułu wykonują się tylko
// jek się na nie zasubskrybuje, ot taki LAZY mechanizm...
  addReview(requestBody: LiquorData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/reviews/save', requestBody);
  }

}
