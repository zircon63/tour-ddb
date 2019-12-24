import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WEB_API_CONFIG} from '../../web-api.config';
import {RequestOptions, ResultRequest} from '../interfaces/request.params.builder.interface';
import {WebApiModuleConfig} from '../interfaces/web.api.config.interface';
import {REQUEST_BUILDER, RequestBuilder} from '../models/request-builder.service';
import {WebApiClient} from './web-api-client.service';

@Injectable()
export class WebApiService {
  private headers: HttpHeaders;

  constructor(@Inject(REQUEST_BUILDER) private builder: RequestBuilder,
              @Inject(WEB_API_CONFIG) private config: WebApiModuleConfig,
              private apiClient: WebApiClient) {
    this.headers = new HttpHeaders(config.headers);
  }

  public get<Response>(url: string, options: RequestOptions = {
    params: new HttpParams(),
    observe: undefined,
    responseType: 'json'
  }): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('get')
      .setHttpParams(options.params)
      .setObserve(options.observe)
      .setResponseType(options.responseType)
      .setURL(this.preparedUrl(url))
      .build();
    return this.makeRequest(request);
  }

  public delete<Body, Response>(url: string, body?: Body): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('delete')
      .setURL(this.preparedUrl(url))
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  public put<Body, Response>(url: string, body?: Body): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('put')
      .setURL(this.preparedUrl(url))
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  public post<Body, Response>(url: string, body?: Body, options: RequestOptions = {
    observe: 'body',
    reportProgress: false
  }): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(options.headers || this.headers)
      .setWithCredentials(true)
      .setMethod('post')
      .setReportProgress(options.reportProgress)
      .setObserve(options.observe)
      .setURL(this.preparedUrl(url))
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  public patch<Body, Response>(url: string, body?: Body): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('patch')
      .setURL(this.preparedUrl(url))
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  private preparedUrl(url: string): string {
    return this.config.baseUrl + url;
  }

  private makeRequest<Response>(request: ResultRequest) {
    return this.apiClient.request(request.method, request.url, request.options);
  }
}
