import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartState, CartStore } from './cart.store';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { CartItem } from '@pages/cart/state/cart.model';

@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {

  constructor(protected store: CartStore) {
    super(store);
  }

  selectItems$ = this.selectAll().pipe(
    map(joinItems),
    publishReplay(),
    refCount(),
  );

  selectTotal$ = this.selectItems$.pipe(
    map(items => items.reduce((acc, item) => acc + item.total, 0),
    ));

}

function joinItems(cartItems: CartItem[]) {
  return cartItems.map(cartItem => {
    return {
      ...cartItem,
      total: cartItem.amount * cartItem.price,
    };
  });
}
