import {InjectFlags, InjectionToken, Injector, Type} from '@angular/core';

export class ServiceLocator {
  static injector: Injector;

  static get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T | null {
    try {
      return ServiceLocator.injector.get<T>(token, notFoundValue, flags);
    } catch (e) {
      return null;
    }
  }
}
