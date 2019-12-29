export enum OrderStatus {
  Created = 'created',
  Process = 'process',
  Completed = 'completed',
}

export const ORDER_STATUS = [
  {
    value: OrderStatus.Created,
    view: 'Создан',
  },
  {
    value: OrderStatus.Process,
    view: 'В процессе',
  },
  {
    value: OrderStatus.Completed,
    view: 'Завершен',
  },
];
