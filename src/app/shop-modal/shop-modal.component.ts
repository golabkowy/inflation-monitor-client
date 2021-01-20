import {Component, OnInit} from '@angular/core';
import {ShopService} from '../services/shop.service';
import {ShopType} from '../interfaces/ShopType';

@Component({
  selector: 'app-shop-modal',
  templateUrl: './shop-modal.component.html',
  styleUrls: ['./shop-modal.component.css']
})
export class ShopModalComponent implements OnInit {

  shopTypesList: ShopType[] = [];
  newShopTypeValue = 'nowa kategoria sklepu';

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.shopService.listShopTypes().subscribe(result => {
      result.forEach(el => {
        this.shopTypesList.push(el);
      });
    });
  }

}
