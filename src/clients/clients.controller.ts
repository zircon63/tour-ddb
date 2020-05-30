import { Controller } from '@nestjs/common';
import { ClientEntity } from './client.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { ClientsService } from './clients.service';

@Crud({
  model: {
    type: ClientEntity,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('clients')
export class ClientsController implements CrudController<ClientEntity> {
  constructor(public service: ClientsService) {
  }

  get base(): CrudController<ClientEntity> {
    return this;
  }
}
