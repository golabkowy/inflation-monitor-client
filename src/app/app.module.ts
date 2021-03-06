import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

import {AppRoutingModule} from './app-routing-module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {ChartAreaComponent} from './chart-area/chart-area.component';
import {ProductComponent} from './product/product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableComponent} from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LiquorReviewsComponent} from './liquor-reviews/liquor-reviews.component';
import {MainComponent} from './main/main.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {NavigationComponent} from './navigation/navigation.component';
import {LinksComponent} from './links/links.component';
import {NotesComponent} from './notes/notes.component';
import {NoteComponent} from './note/note.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ProductModalComponent} from './product-modal/product-modal.component';
import {ShopModalComponent} from './shop-modal/shop-modal.component';
import {PurchaseModalComponent} from './purchase-modal/purchase-modal.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ChartAreaComponent,
    ProductComponent,
    PageNotFoundComponent,
    TableComponent,
    LiquorReviewsComponent,
    MainComponent,
    NavigationComponent,
    LinksComponent,
    NotesComponent,
    NoteComponent,
    ProductModalComponent,
    ShopModalComponent,
    PurchaseModalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ChartsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRadioModule,
        MatCardModule,
        MatIconModule,
        MatAutocompleteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
