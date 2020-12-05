import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';
import {ProductModel} from '../interfaces/ProductModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productService: ProductService;
  products: Array<Product>;
  // form variables
  productFormModel = new ProductModel(1, 'defalt-name', '123', 'biedra', '25-10-2020');
  submited = false;

  onFormSubmitFunctionNamedByMe(): void {
    console.log(this.productFormModel);
    this.submited = true;
  }

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
  }

  buttonClick(): void {
    const lol: Observable<Array<Product>> = this.productService.getProductsList();
    lol.subscribe(data => {
      this.products = data;
    }, error => {
      console.log('some unexpected error occured when Product component request for products');
    });
  }
}
