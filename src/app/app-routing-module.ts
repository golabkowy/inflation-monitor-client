import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {ProductComponent} from './product/product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ChartAreaComponent} from './chart-area/chart-area.component';
import {TableComponent} from './table/table.component';
import {LiquorReviewsComponent} from './liquor-reviews/liquor-reviews.component';
import {MainComponent} from './main/main.component';
import {NavigationComponent} from './navigation/navigation.component';

// here it is the place to aa dom "canActivateMethods"
// jakie sa roznice miedzy can activate a can load albo canActivateChil
// canActivate is used to prevent unauthorized users from accessing certain routes. See docs for more info.
// canLoad is used to prevent the application from loading entire modules lazily if the user is not authorized to do so.

const routes: Routes = [
  // {path: 'example', component: ExampleComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'products', component: ProductComponent},
  {path: 'chart', component: ChartAreaComponent},
  {path: 'table', component: TableComponent},
  {path: 'liquor-reviews', component: LiquorReviewsComponent},
  {path: 'main', component: MainComponent},
  {path: 'navigate', component: NavigationComponent},
  {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
