import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {ShopModalComponent} from '../shop-modal/shop-modal.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ShopService} from '../services/shop.service';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.css']
})
export class PurchaseModalComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  products: string[] = ['adasd', 'asdasd', 'asdasd'];
  shops: string[] = [];

  constructor(public dialogRef: MatDialogRef<PurchaseModalComponent>, private dialogShop: MatDialog, private shopService: ShopService) {
    this.shopService.listShops().subscribe(resp => {
      resp.forEach(el => {
        this.shops.push(el.name);
      });
    });
  }

  ngOnInit(): void {
  }

  test(): any {
  }

  openShopDialog(): any {
    this.dialogRef.close();
    this.dialogShop.open(ShopModalComponent);
  }
}
