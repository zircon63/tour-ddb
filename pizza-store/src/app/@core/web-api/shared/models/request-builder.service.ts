import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable, InjectionToken} from '@angular/core';
import {TypeResponse} from '../enum/response.type';
import {RequestMethod, RequestOptions, RequestParamsBuilder, ResultRequest} from '../interfaces/request.params.builder.interface';

export const REQUEST_BUILDER = new InjectionToken('REQUEST_BUILDER');

@Injectable()
export class RequestBuilder implements RequestParamsBuilder {
  public static fromObject(object: any) {
    return new HttpParams({
      fromObject: object
    });
  }

  private options!: RequestOptions;
  private URL!: string;
  private method!: RequestMethod;

  constructor() {
  }

  public init(): RequestBuilder {
    this.options = {} as RequestOptions;
    return this;
  }

  public setHeaders(headers: HttpHeaders | {
    [header: string]: string | string[];
  }): RequestBuilder {
    this.options.headers = headers;
    return this;
  }

  public setObserve(value: any): RequestBuilder {
    this.options.observe = value;
    return this;
  }

  public setHttpParams(params: HttpParams | {
    [param: string]: string | string[];
  }): RequestBuilder {
    this.options.params = params;
    return this;
  }

  public setReportProgress(value: boolean): RequestBuilder {
    this.options.reportProgress = value;
    return this;
  }

  public setResponseType(type: TypeResponse): RequestBuilder {
    this.options.responseType = type;
    return this;
  }

  public setWithCredentials(value: boolean): RequestBuilder {
    this.options.withCredentials = value;
    return this;
  }

  public build(): ResultRequest {
    return {
      url: this.URL,
      method: this.method,
      options: this.options
    };
  }

  public setBody<T>(body: T): RequestBuilder {
    this.options.body = body;
    return this;
  }

  public setURL(url: string): RequestBuilder {
    this.URL = url;
    return this;
  }

  public setMethod(type: RequestMethod): RequestBuilder {
    this.method = type;
    return this;
  }
}
