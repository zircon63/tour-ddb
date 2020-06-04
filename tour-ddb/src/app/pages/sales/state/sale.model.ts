import { SaleInterface } from '@backend/sales/sale.interface';

export interface Sale extends SaleInterface {
}

export function createSale(params: Partial<Sale>) {
  return {} as Sale;
}
