import { ClientEntity } from '../clients/client.entity';
import { EmployeeEntity } from '../employes/employee.entity';
import { TourEntity } from '../tours/tour.entity';

export interface SaleInterface {
  readonly id: number;
  readonly date: Date;
  readonly client_id: number;
  readonly employee_id: number;
  readonly tour_id: number;
  readonly employee: EmployeeEntity;
  readonly client: ClientEntity;
  readonly tour: TourEntity;
}
