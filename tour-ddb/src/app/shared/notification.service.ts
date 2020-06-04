import { Injectable } from '@angular/core';
import { SnackBarConfig } from '@ui/shared/models/snackbar-config.model';
import { MatSnackBar } from '@angular/material';

export interface NotificationInterface {
  message(value: string): void;

  error(value: string): void;

  success(value: string): void;
}

@Injectable({ providedIn: 'root' })
export class NotificationService implements NotificationInterface {
  constructor(private snackbar: MatSnackBar) {
  }

  error(value: string): void {
    const config = new SnackBarConfig('error');
    this.snackbar.open(value, 'Закрыть', config);
  }

  message(value: string): void {
    const config = new SnackBarConfig('message');
    this.snackbar.open(value, 'Закрыть', config);
  }

  success(value: string): void {
    const config = new SnackBarConfig('success');
    this.snackbar.open(value, 'Закрыть', config);
  }
}
