import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CountryEntity } from './country.entity';
import { CountriesService } from './countries.service';

@Crud({
  model: {
    type: CountryEntity,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('countries')
export class CountriesController implements CrudController<CountryEntity> {
  constructor(public service: CountriesService) {
  }

  get base(): CrudController<CountryEntity> {
    return this;
  }
}
