import { Provider } from '@nestjs/common';
import { createClient, RedisClient } from 'redis';
import { ConfigService } from '@nestjs/config';
import * as ConnectRedis from 'connect-redis';
import { RedisStore } from 'connect-redis';
import * as session from 'express-session';

export const REDIS_STORE = Symbol('REDIS_STORE');
export const REDIS_SESSION = Symbol('REDIS_SESSION');
export const provideRedisClient: Provider = {
  provide: RedisClient,
  useFactory: (config: ConfigService) => {
    return createClient({
      port: config.get('redis.port'),
      host: config.get('redis.host'),
      path: config.get('redis.socket'),
      db: config.get('redis.dbs.session'),
    });
  },
  inject: [ConfigService],
};

export const provideRedisStore: Provider = {
  provide: REDIS_STORE,
  useFactory: (client: RedisClient, config: ConfigService) => {
    const connectRedis = ConnectRedis(session);
    return new connectRedis({ client, ttl: config.get('auth.ttl') });
  },
  inject: [RedisClient, ConfigService],
};

export const provideRedisSession: Provider = {
  provide: REDIS_SESSION,
  useFactory: (store: RedisStore, config: ConfigService) => {
    return session({
      name: config.get('auth.sessionName'),
      secret: config.get('auth.secret'),
      resave: false,
      saveUninitialized: false,
      store,
    });
  },
  inject: [REDIS_STORE, ConfigService],
};
