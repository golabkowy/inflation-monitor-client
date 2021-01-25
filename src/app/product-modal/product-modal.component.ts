import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Product} from '../interfaces/Product';
import {ProductService} from '../services/product.service';
import {MatDatepicker} from '@angular/material/datepicker';
import {ProductType} from '../interfaces/ProductType';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  productDataModel: Product = {
    name: '',
    productType: '',
    price: 0,
    shop: ''
  };

  shops: string[] = [];
  productTypes: ProductType[] = [];

  constructor(public dialogRef: MatDialogRef<ProductModalComponent>, private productService: ProductService) {
    this.productService.getProductsTypesList().subscribe(resp => {
      resp.forEach(type => {
        this.productTypes.push(type);
      });
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): any {
    this.dialogRef.close('dialog closed');
  }

  addNewProductType(): any {
    this.productService.addNewProductType(this.productDataModel);
  }

}
