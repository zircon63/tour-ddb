import { Inject, Injectable } from '@nestjs/common';
import { REDIS_STORE } from './redis.provider';
import { RedisStore } from 'connect-redis';

@Injectable()
export class RedisService {
  constructor(@Inject(REDIS_STORE) private readonly redisStore: RedisStore) {
  }
}
