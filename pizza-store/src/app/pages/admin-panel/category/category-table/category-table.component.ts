import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { CategoryQuery } from '@pages/products/state/category.query';
import { CategoryService } from '@pages/products/state/category.service';
import { CrudComponent } from '@ui/ui-components/crud-table/crud.component';
import { CategoryState } from '@pages/products/state/category.store';
import { NotificationService } from '@shared/notification.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTableComponent extends CrudComponent<CategoryState> implements OnInit {
  data$ = this.categoryQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
    },
    {
      name: 'name',
      header: 'Название',
    },
  ];

  constructor(private categoryQuery: CategoryQuery,
              protected categoryService: CategoryService,
              protected notificationService: NotificationService) {
    super(categoryService, notificationService);
  }

  ngOnInit() {
  }

}
