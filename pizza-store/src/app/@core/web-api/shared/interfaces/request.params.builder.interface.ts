import {HttpHeaders, HttpParams} from '@angular/common/http';
import {TypeResponse} from '../enum/response.type';
import {RequestBuilder} from '../models/request-builder.service';

export interface RequestOptions {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  observe?: any;
  reportProgress?: boolean;
  responseType?: TypeResponse;
  withCredentials?: boolean;
}

export interface ResultRequest {
  url: string;
  method: RequestMethod;
  options: RequestOptions;
}

export type RequestMethod = 'post' | 'get' | 'delete' | 'put' | 'patch';

export interface RequestParamsBuilder {

  init(): RequestBuilder;

  setMethod(type: string): RequestBuilder;

  setHeaders(headers: HttpHeaders): RequestBuilder;

  setObserve(value: any): RequestBuilder;

  setHttpParams(params: HttpParams): RequestBuilder;

  setReportProgress(value: boolean): RequestBuilder;

  setResponseType(type: TypeResponse): RequestBuilder;

  setWithCredentials(value: boolean): RequestBuilder;

  setURL(value: string): RequestBuilder;

  setBody<T>(body: T): RequestBuilder;

  build(): ResultRequest;
}
