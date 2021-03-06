import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ProductModalComponent} from '../product-modal/product-modal.component';
import {ShopModalComponent} from '../shop-modal/shop-modal.component';
import {Product} from '../interfaces/Product';
import {PurchaseModalComponent} from '../purchase-modal/purchase-modal.component';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  productService: ProductService;
  products: Array<Product>;
  // form variables
  productFormModel = {};
  submited = false;

  // checkbox props
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  // table stuff
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  openedDialogRef: MatDialogRef<any> = null;

  // end of table stuff

  onFormSubmitFunctionNamedByMe(): void {
    console.log(this.productFormModel);
    this.submited = true;
  }

  constructor(productService: ProductService, public dialog: MatDialog) {
    this.productService = productService;
    // table stuff
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  buttonClick(): void {
    const lol: Observable<Array<Product>> = this.productService.getProductsList();
    lol.subscribe(data => {
      this.products = data;
    }, error => {
      console.log('some unexpected error ocurred when Product component request for products');
    });
  }

  openProductDialog(): any {
    // tslint:disable-next-line:no-unused-expression
    this.openedDialogRef != null && this.openedDialogRef.close();
    this.openedDialogRef = this.dialog.open(ProductModalComponent);
  }

  openShopDialog(): any {
    // tslint:disable-next-line:no-unused-expression
    this.openedDialogRef != null && this.openedDialogRef.close();
    this.dialog.open(ShopModalComponent);
  }

  openPurchaseDialog(): any {
    // tslint:disable-next-line:no-unused-expression
    this.openedDialogRef != null && this.openedDialogRef.close();
    this.dialog.open(PurchaseModalComponent);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
