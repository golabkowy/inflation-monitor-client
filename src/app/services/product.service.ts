import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getProductsList(): Observable<Array<Product>> {
    // domyslny typ w responseType to chyba json, plain texta nie lyka jestli się nie wyspecyfikuje tego typu
    const response = this.httpClient.get('http://localhost:8080/response-entity-test', {responseType: 'json'});
    console.log('response bez mapowania');
    console.log(response);
    return this.httpClient.get<Array<Product>>('http://localhost:8080/response-entity-test', {responseType: 'json'});
  }
}


