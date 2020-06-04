import { FormGroup } from '@angular/forms';

export interface CrudFormContext<T> {
  title: string;
  closeLabel: string;
  actionLabel: string;
  form: FormGroup;
  entity: T;
}
