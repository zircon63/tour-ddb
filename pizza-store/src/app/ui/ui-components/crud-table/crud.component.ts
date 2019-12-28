import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { NotificationService } from '@shared/notification.service';
import { EntityState, getEntityType, getIDType } from '@datorama/akita';
import { take } from 'rxjs/operators';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { Observable } from 'rxjs';

export class CrudComponent<S extends EntityState> {
  data$: Observable<getEntityType<S>[]>;
  columnDefinitions: ColumnDefinition[];

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
