import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from '@ui/ui.module';
import { CoreModule } from '@core/core.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    UiModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
