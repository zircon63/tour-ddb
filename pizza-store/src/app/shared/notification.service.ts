import {Injectable} from '@angular/core';
import {SnackBarConfig} from '@ui/shared/models/snackbar-config.model';
import {MatSnackBar} from '@angular/material';

@Injectable({providedIn: 'root'})
export class NotificationService {
  constructor(private snackbar: MatSnackBar) { }

  showErrorMessage(err: string) {
    this.snackbar.open(err, 'Закрыть',  new SnackBarConfig());
  }

  showSuccessMessage(msg: string) {
    this.snackbar.open(msg, 'Закрыть',  new SnackBarConfig('succsess'));
  }

  showSuccessRemoved() {
    this.snackbar.open('Успешно удалено', 'Закрыть',  new SnackBarConfig('succsess'));
  }
  showSuccessEdited() {
    this.snackbar.open('Успешно отредактировано', 'Закрыть',  new SnackBarConfig('succsess'));
  }
  showSuccessCreated() {
    this.snackbar.open('Успешно создано', 'Закрыть',  new SnackBarConfig('succsess'));
  }
}
