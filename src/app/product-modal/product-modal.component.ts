import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../interfaces/product';
import {ProductService} from '../services/product.service';
import {MatDatepicker} from '@angular/material/datepicker';
import {ShopService} from '../services/shop.service';
import {ShopModalComponent} from '../shop-modal/shop-modal.component';
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
    category: ''
  };

  shops: string[] = [];
  productTypes: ProductType[] = [];

  constructor(public dialogRef: MatDialogRef<ProductModalComponent>, private productService: ProductService,
              private shopService: ShopService, private dialogShop: MatDialog) {
    this.shopService.listShops().subscribe(resp => {
      resp.forEach(el => {
        this.shops.push(el.name);
      });
    });

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

  openShopDialog(): any {
    this.dialogRef.close();
    this.dialogShop.open(ShopModalComponent);
  }

  addNewProductType(): any {
    this.productService.addNewProductType(this.productDataModel);
  }

}
