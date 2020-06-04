import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TourQuery } from '@pages/tours/state/tour.query';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { AllowedCrudOperations } from '@ui/ui-components/crud-table/crudOperation';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientQuery } from '@pages/clients/state/client.query';
import { TOUR_COLUMNS } from '@pages/tours/tours-table/tours-table.component';
import { CLIENT_COLUMNS } from '@pages/clients/clients-table/clients-table.component';
import { AuthQuery } from '../../../auth/state';
import { TicketService } from '@pages/ticket/state/ticket.service';
import { Client } from '@pages/clients/state/client.model';
import { Tour } from '@pages/tours/state/tour.model';
import { Account } from '../../../auth/state/models/account.model';
import { take } from 'rxjs/operators';
import { NotificationService } from '@shared/notification.service';

type FormField = 'tour' | 'client';
type TicketFormValue = {
  client: Client;
  employee: Account,
  tour: Tour
}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTicketComponent implements OnInit {
  formGroup = this.fb.group({
    tour: this.fb.control(null, Validators.required),
    client: this.fb.control(null, Validators.required),
    employee: this.fb.control(this.authQuery.user),
  });
  tours$ = this.tourQuery.selectAll();
  clients$ = this.clientQuery.selectAll();
  columnDefinitions: Record<FormField, ColumnDefinition[]> = {
    client: CLIENT_COLUMNS,
    tour: TOUR_COLUMNS,
  };
  operations: Record<FormField, AllowedCrudOperations> = {
    tour: {
      add: false,
      delete: false,
      update: false,
    },
    client: {
      add: true,
      delete: false,
      update: false,
    },
  };

  constructor(private tourQuery: TourQuery,
              private clientQuery: ClientQuery,
              private authQuery: AuthQuery,
              private ticketService: TicketService,
              private notificationService: NotificationService,
              private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  createTicket() {
    const formValue: TicketFormValue = this.formGroup.value;
    const ticket: any = {
      ...formValue,
      date: new Date(),
    };
    this.ticketService.add(ticket).pipe(
      take(1),
    ).subscribe(() => {
      this.notificationService.success('Заявка успешно создана');
    }, () => {
      this.notificationService.error('Ошибка');
    });
  }

}
