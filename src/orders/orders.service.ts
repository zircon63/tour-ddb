import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>) {

  }

  async create(order: Order) {
    return this.orderRepository.save(order);
  }

  async remove(id: string) {
    return this.orderRepository.delete(id);
  }

  async update(id: string, order: Order) {
    await this.orderRepository.update(id, order);
    return order;
  }

  async findOne(params: DeepPartial<Order>) {
    return this.orderRepository.findOne(params);
  }

  async find(params?: FindManyOptions<Order>) {
    return this.orderRepository.find(params);
  }
}
