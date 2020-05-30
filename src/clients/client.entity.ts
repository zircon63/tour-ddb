import { ClientInterface } from './client.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SaleEntity } from '../sales/sale.entity';

@Entity({
  name: 'client',
})
export class ClientEntity implements ClientInterface {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column('varchar')
  readonly name: string;
  @Column('varchar')
  readonly passport: string;
  @Column('varchar')
  readonly phone: string;
  @Column('varchar')
  readonly surname: string;

  @OneToMany(() => SaleEntity, sale => sale.client)
  sales: SaleEntity[];

  constructor(data: ClientInterface) {
    Object.assign(this, data);
  }
}
