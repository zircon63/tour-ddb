import { SaleInterface } from './sale.interface';
import { ClientEntity } from '../clients/client.entity';
import { EmployeeEntity } from '../employes/employee.entity';
import { TourEntity } from '../tours/tour.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export class SaleEntity implements SaleInterface {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column('integer')
  @Exclude()
  readonly client_id: number;
  @Column('date')
  readonly date: Date;
  @Column('integer')
  @Exclude()
  readonly employee_id: number;
  @Column('integer')
  @Exclude()
  readonly tour_id: number;
  @ManyToOne(() => ClientEntity, client => client.sales)
  readonly client: ClientEntity;
  @ManyToOne(() => EmployeeEntity, employee => employee.sales)
  readonly employee: EmployeeEntity;
  @ManyToOne(() => TourEntity, tour => tour.sales)
  readonly tour: TourEntity;

  constructor(data: SaleInterface) {
    Object.assign(this, data);
  }
}
