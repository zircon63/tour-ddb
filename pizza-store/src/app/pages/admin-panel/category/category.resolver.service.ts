import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Category } from '@pages/products/state/category.model';
import { CategoryService } from '@pages/products/state/category.service';

@Injectable()
export class CategoryResolver implements Resolve<Category[]> {
  constructor(private categoryService: CategoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.categoryService.get<Category[]>();
  }
}
