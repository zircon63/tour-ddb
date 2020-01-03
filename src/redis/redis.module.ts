import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { provideRedisClient, provideRedisSession, provideRedisStore } from './redis.provider';

@Module({
  providers: [
    RedisService,
    provideRedisClient,
    provideRedisStore,
    provideRedisSession,
  ],
  exports: [
    RedisService,
    provideRedisClient,
    provideRedisStore,
    provideRedisSession],
})
export class RedisModule {
}
