import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {WebApiModule} from './web-api/web-api.module';
import {environment} from '../../environments/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';

const CORE_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  WebApiModule.forRoot(
    {
      baseUrl: environment.WEB_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
]
;

if (!environment.production) {
  CORE_MODULES.push(AkitaNgDevtools.forRoot());
}

@NgModule({
  declarations: [],
  imports: CORE_MODULES
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
