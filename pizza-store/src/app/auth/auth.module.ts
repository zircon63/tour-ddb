import {APP_INITIALIZER, NgModule} from '@angular/core';
import {UiModule} from '@ui/ui.module';
import {AuthQuery, AccountService} from './state';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {CanActivateAuthGuard} from './can-activate-auth.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule,
    SharedModule,
    UiModule
  ],
  providers: [
    AuthGuard,
    CanActivateAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: APP_INIT,
      deps: [AuthQuery, AccountService],
      multi: true
    }
  ]
})
export class AuthModule {
}

export function APP_INIT(authQuery: AuthQuery, authService: AccountService) {
  return () => {
    if (authQuery.accessToken) {
      return authService.getProfile().toPromise();
    }
    return Promise.resolve(true);
  };
}
