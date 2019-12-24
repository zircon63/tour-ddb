import {HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ResultRequest} from '../interfaces/request.params.builder.interface';
import {REQUEST_BUILDER, RequestBuilder} from '../models/request-builder.service';
import {WebApiClient} from './web-api-client.service';

@Injectable()
export class RemoteApiService {
  constructor(@Inject(REQUEST_BUILDER) private builder: RequestBuilder,
              private apiClient: WebApiClient) {
  }

  public get<Response>(url: string, headers?: string | Record<string, string>): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.getHeaders(headers))
      .setWithCredentials(true)
      .setMethod('get')
      .setURL(url)
      .build();
    return this.makeRequest(request);
  }

  public delete<Body, Response>(url: string, body?: Body, headers?: string | Record<string, string>): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.getHeaders(headers))
      .setWithCredentials(true)
      .setMethod('delete')
      .setURL(url)
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  public put<Body, Response>(url: string, body?: Body, headers?: string | Record<string, string>): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.getHeaders(headers))
      .setWithCredentials(true)
      .setMethod('put')
      .setURL(url)
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  public post<Body, Response>(url: string, body?: Body, headers?: string | Record<string, string>): Observable<Response> {
    const request = this.builder
      .init()
      .setHeaders(this.getHeaders(headers))
      .setWithCredentials(true)
      .setMethod('post')
      .setURL(url)
      .setBody(body)
      .build();
    return this.makeRequest(request);
  }

  private getHeaders(headers: string | Record<string, string>): HttpHeaders {
    return new HttpHeaders(headers);
  }

  private makeRequest<Response>(request: ResultRequest) {
    return this.apiClient.request(request.method, request.url, request.options);
  }
}
