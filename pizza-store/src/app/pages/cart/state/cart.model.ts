import { Product } from '@pages/products/state/product.model';

export interface CartItem extends Product {
  amount: number;
}

export function createCartItem(params: Partial<CartItem>) {
  return {
    ...params,
  } as CartItem;
}
