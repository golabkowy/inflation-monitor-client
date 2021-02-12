import {Component, OnInit} from '@angular/core';
import {ShopService} from '../services/shop.service';
import {ShopType} from '../interfaces/ShopType';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-shop-modal',
  templateUrl: './shop-modal.component.html',
  styleUrls: ['./shop-modal.component.css']
})
export class ShopModalComponent implements OnInit {

  shopTypesList: ShopType[] = [];
  newShopTypeValue = 'nowa kategoria sklepu';
  shopCategoryControll = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  shopNameDefaultValue = 'put shop name here';
  shopCategory: ShopType = {id: 0, name: ''};


  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.shopService.listShopTypes().subscribe(result => {
      result.forEach(el => {
        this.shopTypesList.push(el);
      });
    });
  }

  shopFormSubmit(): any {
    console.log('TEST shop submit');
  }
}
