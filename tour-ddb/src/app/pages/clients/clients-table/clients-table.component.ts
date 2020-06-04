import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllowedCrudOperations, CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { ClientService } from '@pages/clients/state/client.service';
import { ClientState } from '@pages/clients/state/client.store';
import { ClientQuery } from '@pages/clients/state/client.query';

export const CLIENT_COLUMNS = [
  {
    name: 'id',
    header: 'ID',
    display: true
  },
  {
    name: 'name',
    header: 'Имя',
    display: true
  },
  {
    name: 'surname',
    header: 'Фамилия',
    display: true
  },
  {
    name: 'passport',
    header: 'Паспорт',
    display: true
  },
  {
    name: 'phone',
    header: 'Телефон',
    display: true
  },
];
@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(ClientService),
  ],
})
export class ClientsTableComponent implements CrudTableDataProvider<ClientState> {
  data$ = this.clientQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = CLIENT_COLUMNS;
  operations: AllowedCrudOperations = {
    add: true,
    delete: true,
    update: true,
  };

  constructor(
    protected clientQuery: ClientQuery,
    public crud: CrudOperation<ClientState>,
  ) {
  }

}
