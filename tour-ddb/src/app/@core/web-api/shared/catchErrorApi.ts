import { catchError } from 'rxjs/operators';
import { NotificationInterface } from '@shared/notification.service';
import { EMPTY, MonoTypeOperatorFunction, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiProblem } from '@core/web-api/shared/models/api.problem';

export function catchErrorApi<T>(logger: NotificationInterface): MonoTypeOperatorFunction<T> {
  return (obs: Observable<T>) => obs.pipe(catchError((response: Error) => {
    if (response instanceof HttpErrorResponse) {
      const apiProblem: ApiProblem = response.error;
      logger.error(apiProblem.message);
    }
    return EMPTY;
  }));
}
