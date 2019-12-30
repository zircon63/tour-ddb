export enum OrderStatus {
  Created = 'created',
  Process = 'process',
  Completed = 'completed',
}

export const ORDER_VIEW_MAP = {
  [OrderStatus.Created]: 'Создан',
  [OrderStatus.Process]: 'В процессе',
  [OrderStatus.Completed]: 'Завершен',
};

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
