import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CartStore } from './cart.store';
import { CartItem, createCartItem } from './cart.model';
import { Product } from '@pages/products/state/product.model';
import { CartQuery } from '@pages/cart/state/cart.query';
import { OrderService } from '@pages/orders/state/order.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private cartStore: CartStore,
              private ordersService: OrderService,
              private cartQuery: CartQuery) {
  }

  add(product: Product) {
    const findItem = this.cartQuery.getEntity(product);
    if (findItem) {
      return this.updateAmount(findItem);
    }
    const item = createCartItem({
      ...product,
      amount: 1,
    });
    return this.cartStore.add(item);
  }

  updateAmount(item: CartItem, amount = 1) {
    return this.cartStore.updateAmount(item, amount);
  }

  remove(id: ID) {
    this.cartStore.remove(id);
  }

  performOrder(items: CartItem[]) {
    return this.ordersService.create(items).pipe(
      tap(() => this.cartStore.reset()),
    );
  }
}
