import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
  div class="container">
  <div class="row">
    <div class="col-sm-12">
      <h1 class="text-center">Online Store</h1>
     <hr />
    </div>
  </div>
 <!-- <app-products></app-products> -->
  <router-outlet></router-outlet>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'online-store';
  cart: any[] = [];

  constructor(private store: Store<any>){}

  ngOnInit(){
    this.store.select('cart').subscribe((state => this.cart = state))
  }
}
