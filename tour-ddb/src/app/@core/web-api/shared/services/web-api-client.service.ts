import {HttpBackend, HttpClient} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {WEB_API_INTERCEPTORS, WebApiHandlerService} from './web-api.handler.service';


@Injectable()
export class WebApiClient extends HttpClient {
  constructor(backend: HttpBackend, private injector: Injector) {
    super(new WebApiHandlerService(backend, injector, WEB_API_INTERCEPTORS));
  }
}
