import {HttpBackend, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {InjectionToken, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {WebApiHandler} from '../handlers/web-api.handler';


export const WEB_API_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>('WEB_API_INTERCEPTORS');

export class WebApiHandlerService implements HttpHandler {

  private chain: HttpHandler | null = null;

  constructor(private backend: HttpBackend, private injector: Injector, private interceptors: InjectionToken<HttpInterceptor[]>) {
  }

  public handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (this.chain === null) {
      const interceptors = this.injector.get(this.interceptors, []);
      this.chain = interceptors.reduceRight(
        (next, interceptor) => new WebApiHandler(next, interceptor), this.backend);
    }
    return this.chain.handle(req);
  }
}
