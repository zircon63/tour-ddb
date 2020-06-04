import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { EmployeeInterface } from './employee.interface';
import { SaleEntity } from '../sales/sale.entity';

@Entity({
  name: 'employee',
})
export class EmployeeEntity implements EmployeeInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  login: string;
  @Column('varchar')
  @Exclude()
  password: string;
  @Column('varchar')
  name: string;
  @Column('varchar')
  surname: string;
  @Column('varchar')
  phone: string;

  @OneToMany(() => SaleEntity, sale => sale.employee)
  sales: SaleEntity[];

  constructor(data: Partial<EmployeeInterface>) {
    Object.assign(this, data);
  }
}
