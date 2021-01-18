import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Shop} from '../interfaces/Shop';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) {
  }

  listShops(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>('http://localhost:8080/shop/list', {withCredentials: true});
  }
}
