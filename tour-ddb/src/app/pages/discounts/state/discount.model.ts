import { DiscountInterface } from '@backend/discounts/discount.interface';

export interface Discount extends DiscountInterface {
}

export function createDiscount(params: Partial<Discount>) {
  return {} as Discount;
}
