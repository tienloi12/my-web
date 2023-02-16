import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },{ path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }, { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
