import { DeepPartial, Repository } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountsService } from '../../discounts/discounts.service';
import { TourEntity } from '../tour.entity';
import { DiscountEntity } from '../../discounts/discount.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TourServiceLocal extends TypeOrmCrudService<TourEntity> {
  constructor(@InjectRepository(TourEntity) repo: Repository<TourEntity>,
              private readonly discountService: DiscountsService) {
    super(repo);
  }

  async getMany(req: CrudRequest): Promise<TourEntity[]> {
    const tours: TourEntity[] = await super.getMany(req) as TourEntity[];
    const discounts: DiscountEntity[] = await this.discountService.find();
    return tours.map((tour) => {
      tour.discount = discounts.find(discount => discount.id === tour.discount_id);
      return tour;
    });
  }

  async replaceOne(req: CrudRequest, dto: DeepPartial<TourEntity>): Promise<TourEntity> {
    const tour: TourEntity = await super.replaceOne(req, dto);
    const discounts: DiscountEntity[] = await this.discountService.find();
    tour.discount = discounts.find(discount => discount.id === tour.discount_id);
    return tour;
  }
}
