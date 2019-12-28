import { FormGroup } from '@angular/forms';

export interface CrudFormContext {
  title: string;
  closeLabel: string;
  actionLabel: string;
  form: FormGroup;
}
