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
    const result = this.httpClient.get<Array<Product>>('http://localhost:8080/products', {responseType: 'json'});
    return result;
  }

  addNewProductType(product: Product): any {
    this.httpClient.post('http://localhost:8080/products/add-new-product-type', product).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('error');
    });
  }
}


