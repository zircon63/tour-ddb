import {HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FAKE_API_CONFIG} from '../../web-api.config';
import {ResultRequest} from '../interfaces/request.params.builder.interface';
import {WebApiModuleConfig} from '../interfaces/web.api.config.interface';
import {REQUEST_BUILDER, RequestBuilder} from '../models/request-builder.service';
import {WebApiClient} from './web-api-client.service';

@Injectable()
export class FakeApiService {
  private headers: HttpHeaders;

  constructor(@Inject(REQUEST_BUILDER) private builder: RequestBuilder,
              @Inject(FAKE_API_CONFIG) private config: WebApiModuleConfig,
              private apiClient: WebApiClient) {
    this.headers = new HttpHeaders(config.headers);
  }

  public get<Response>(url: string): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('get')
      .setURL(this.preparedUrl(url))
      .build();
    return this.makeRequest(request);
  }

  public delete<Body, Response>(url: string, body?: Body): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('get')
      .setURL(this.preparedUrl(url))
      .build();
    return this.makeRequest(request);
  }

  public put<Body, Response>(url: string, body?: Body): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('get')
      .setURL(this.preparedUrl(url))
      .build();
    return this.makeRequest(request);
  }

  public post<Body, Response>(url: string, body?: Body, headers?: HttpHeaders): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.headers)
      .setWithCredentials(true)
      .setMethod('get')
      .setURL(this.preparedUrl(url))
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
