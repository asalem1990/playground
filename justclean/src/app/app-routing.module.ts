import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id',      component: ProductDetailsComponent },
  { path: 'cart',      component: CartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  router;
  constructor(private _router: Router) {
    this.router = _router;
    console.log(this.router.url);
  }
}