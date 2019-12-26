import {MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

export type SnackBarMessageType = 'error' | 'success' | 'message';

export class SnackBarConfig implements MatSnackBarConfig {
  duration?: number;
  panelClass?: string | string[];
  data?: any;
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
  constructor(private messageType: SnackBarMessageType = 'error',
              private durationTime: number = 72500,
              private horizPosition: MatSnackBarHorizontalPosition = 'right',
              private vertPosition: MatSnackBarVerticalPosition = 'top') {
    this.panelClass = `__${messageType}`;
    this.duration = durationTime;
    this.verticalPosition = vertPosition;
    this.horizontalPosition = horizPosition;
  }
}
