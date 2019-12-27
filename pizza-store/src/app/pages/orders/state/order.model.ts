import { ID } from '@datorama/akita';
import { OrderStatus } from '@backend/orders/status.enum';
import { OrderProduct } from '@backend/orders/order-product.entity';

export interface Order {
  id: ID;
  date: string;
  status: OrderStatus;
  products: OrderProduct[];
}

export function createOrder(params: Partial<Order>) {
  return { ...params } as Order;
}
