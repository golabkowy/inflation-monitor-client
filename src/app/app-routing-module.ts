import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {ProductComponent} from './product/product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'page1', component: LoginComponent},
  {path: 'page2', component: MenuComponent},
  {path: 'page3', component: ProductComponent},
  {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
