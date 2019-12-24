import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule, Optional, Provider, SkipSelf} from '@angular/core';
import {WebApiModuleConfig} from './shared/interfaces/web.api.config.interface';
import {REQUEST_BUILDER, RequestBuilder} from './shared/models/request-builder.service';
import {FakeApiService} from './shared/services/fake-api.service';
import {RemoteApiService} from './shared/services/remote-api.service';
import {WebApiClient} from './shared/services/web-api-client.service';
import {WebApiService} from './shared/services/web-api.service';
import {FAKE_API_CONFIG, WEB_API_CONFIG} from './web-api.config';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class WebApiModule {
  constructor(@Optional() @SkipSelf() parentModule: WebApiModule) {
    if (parentModule) {
      throw new Error(
        'WebApiModule is already loaded. Import it in the CoreModule only');
    }
  }

  public static forRoot(
    webApiConfig: WebApiModuleConfig,
    interceptors: Provider[] = []
  ): ModuleWithProviders {
    return {
      ngModule: WebApiModule,
      providers: [
        {provide: WebApiClient, useClass: HttpClient},
        {provide: REQUEST_BUILDER, useClass: RequestBuilder},
        {provide: WEB_API_CONFIG, useValue: webApiConfig},
        WebApiClient,
        WebApiService,
        RemoteApiService,
        ...interceptors
      ]
    };
  }
}
