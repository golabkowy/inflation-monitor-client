import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Product} from '../interfaces/product';
import {ProductService} from '../services/product.service';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  productDataModel: Product = {
    name: '',
    category: ''
  };

  constructor(public dialogRef: MatDialogRef<ProductModalComponent>, private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  closeDialog(): any {
    this.dialogRef.close('dialog closed');
  }

  addNewProductType(): any {
    console.log('Ad new product type');
    this.productService.addNewProductType(this.productDataModel);
  }

}
