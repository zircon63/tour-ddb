import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '@pages/products/state/product.model';
import { ProductService } from '@pages/products/state/product.service';
import { CategoryService } from '@pages/products/state/category.service';
import { forkJoin } from 'rxjs';
import { Category } from '@pages/products/state/category.model';

@Injectable()
export class ProductsResolver implements Resolve<[Product[], Category[]]> {
  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return forkJoin([
      this.productService.get<Product[]>(),
      this.categoryService.get<Category[]>(),
    ]);
  }
}
