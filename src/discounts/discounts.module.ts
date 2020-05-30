import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountEntity } from './discount.entity';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountEntity])],
  providers: [DiscountsService],
  controllers: [DiscountsController],
})
export class DiscountsModule {
}
