import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Crud({
  model: {
    type: Product,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('products')
export class ProductsController implements CrudController<Product> {
  constructor(public service: ProductsService) {
  }

  get base(): CrudController<Product> {
    return this;
  }
}
