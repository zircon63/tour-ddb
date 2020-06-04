import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../auth/state';
import { Router } from '@angular/router';
import { NgOnDestroy } from '@core/destroy.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';
import { NotificationService } from '@shared/notification.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgOnDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  authForm: FormGroup;
  officeName = environment.officeName;
  constructor(private fb: FormBuilder,
              private authService: AccountService,
              private router: Router,
              private notificationService: NotificationService,
              @Self() private ngOnDestroy$: NgOnDestroy) {
    this.authForm = fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    this.authService.login(this.authForm.value).pipe(
      switchMap(() => fromPromise(this.router.navigate(['']))),
      takeUntil(this.ngOnDestroy$),
    ).subscribe();
  }
}
