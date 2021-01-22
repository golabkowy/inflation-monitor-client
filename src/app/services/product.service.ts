import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';
import {ProductType} from '../interfaces/ProductType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getProductsList(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>('http://localhost:8080/products', {responseType: 'json'});
  }

  getProductsTypesList(): Observable<Array<ProductType>> {
    return this.httpClient.get<Array<ProductType>>('http://localhost:8080/products/product-types', {responseType: 'json'});
  }

  addNewProductType(product: Product): any {
    this.httpClient.post('http://localhost:8080/products/add-new-product-type', product).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('error');
    });
  }
}


