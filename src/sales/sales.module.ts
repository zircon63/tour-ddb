import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleEntity } from './sale.entity';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaleEntity])],
  providers: [SalesService],
  controllers: [SalesController],
})
export class SalesModule {
}
