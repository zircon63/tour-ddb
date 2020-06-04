import { AbstractControlOptions } from '@angular/forms';

export interface ColumnDefinition extends AbstractControlOptions {
  name: string;
  header: string;
  display: boolean;
  disabled?: boolean;
}
