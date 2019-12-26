import { Controller } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from './category.entity';

@Crud({
  model: {
    type: Category,
  },
})
@Controller('categories')
export class CategoriesController implements CrudController<Category> {
  constructor(public service: CategoriesService) {
  }

  get base(): CrudController<Category> {
    return this;
  }
}
