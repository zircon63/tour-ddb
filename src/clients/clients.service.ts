import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';

@Injectable()
export class ClientsService extends TypeOrmCrudService<ClientEntity> {
  constructor(@InjectRepository(ClientEntity) repo) {
    super(repo);
  }
}
