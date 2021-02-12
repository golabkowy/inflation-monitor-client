import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {ShopModalComponent} from '../shop-modal/shop-modal.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ShopService} from '../services/shop.service';
import {FormControl} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.css']
})
export class PurchaseModalComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  shops: string[] = [];
  productPhrase = '';

  // filtering on dropdown - products
  myControl = new FormControl();
  products: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private productService: ProductService, public dialogRef:
                MatDialogRef<PurchaseModalComponent>,
              private dialogShop: MatDialog, private shopService: ShopService) {
    this.shopService.listShops().subscribe(resp => {
      resp.forEach(el => {
        this.shops.push(el.name);
      });
    });
  }

  ngOnInit(): void {
    // filtering on dropdown - products
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  purchaseFormSubmit(): any {
    console.log('TEST, purchase submit');
  }

  openShopDialog(): any {
    this.dialogRef.close();
    this.dialogShop.open(ShopModalComponent);
  }

  delay(ms: number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getProductsByPhrase(): Promise<any> {
    await this.delay(500);
    this.productService.getProductsListByPhrase(this.productPhrase).subscribe(
      resp => {
        this.products = resp.map((obj, index, arr) => {
          return obj.name;
        });
      }
    );
  }
}
