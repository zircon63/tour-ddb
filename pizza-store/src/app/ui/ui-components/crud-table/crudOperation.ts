import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { NotificationService } from '@shared/notification.service';
import { EntityState, getEntityType, getIDType } from '@datorama/akita';
import { take } from 'rxjs/operators';
import { Provider, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';

export interface CrudTableDataProvider<S> {
  data$: Observable<getEntityType<S>[]>;
  columnDefinitions: ColumnDefinition[];
}

export class CrudOperation<S extends EntityState> {
  constructor(protected service: NgEntityService<S>,
              protected notificationService: NotificationService) {
  }

  add(entity: getEntityType<S>) {
    this.service.add(entity).pipe(
      take(1),
    ).subscribe(
      () => this.notificationService.success('Успешно добавлено'),
      () => this.notificationService.error('Ошибка добавления'),
    );
  }

  update(id: getIDType<S>, entity: getEntityType<S>) {
    this.service.update(id, entity).pipe(
      take(1),
    ).subscribe(
      () => this.notificationService.success('Успешно обновлено'),
      () => this.notificationService.error('Ошибка обновления'),
    );
  }

  delete(id: getIDType<S>, entity: getEntityType<S>) {
    this.service.delete(id, entity).pipe(
      take(1),
    ).subscribe(
      () => this.notificationService.success('Успешно удалено'),
      () => this.notificationService.error('Ошибка удаления'),
    );
  }
}

export function provideCrudOperation<S>(token: Type<NgEntityService<S>>): Provider[] {
  return [
    {
      provide: NgEntityService,
      useExisting: token,
    },
    CrudOperation,
  ];
}
