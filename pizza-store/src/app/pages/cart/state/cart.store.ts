import { Injectable } from '@angular/core';
import { CartItem } from './cart.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CartState extends EntityState<CartItem> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart', resettable: true })
export class CartStore extends EntityStore<CartState> {

  constructor() {
    super();
  }

  updateAmount(item: CartItem, amount = 1) {
    const needRemove = item.amount + amount === 0;
    if (needRemove) {
      this.remove(item.id);
    } else {
      this.update(item.id, entity => {
        const newQuantity = entity.amount + amount;
        return {
          ...entity,
          amount: newQuantity,
        };
      });
    }

  }

}

