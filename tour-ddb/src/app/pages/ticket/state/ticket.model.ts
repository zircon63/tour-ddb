import { SaleInterface } from '@backend/sales/sale.interface';

export type Ticket = Omit<SaleInterface, 'id'>;

export function createTicket(params: Partial<Ticket>) {
  return {} as Ticket;
}
