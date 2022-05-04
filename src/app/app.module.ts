import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
      path: 'products',
      component: ProductsComponent
  },
  {
      path: 'cart',
      component: CartComponent
  },
  {
      path: 'product/:id',
      component: ProductComponent
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({cart: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
