import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {ProductComponent} from './product/product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from '../auth/auth.guard';

// here it is the place to aa dom "canActivateMethods"
// jakie sa roznice miedzy can activate a can load albo canActivateChil
// canActivate is used to prevent unauthorized users from accessing certain routes. See docs for more info.
// canLoad is used to prevent the application from loading entire modules lazily if the user is not authorized to do so.

const routes: Routes = [
  {path: 'page1', component: LoginComponent},
  {path: 'page2', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'page3', component: ProductComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
