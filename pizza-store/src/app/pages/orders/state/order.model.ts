import { ID } from '@datorama/akita';
import { OrderStatus } from '@backend/orders/status.enum';
import { Product } from '@pages/products/state/product.model';

export interface Order {
  id: ID;
  date: string;
  status: OrderStatus;
  products: OrderProduct[];
  total: number;
}

export interface OrderProduct {
  amount: number;
  product: Product;
}

export function createOrder(params: Partial<Order>) {
  return { ...params } as Order;
}
