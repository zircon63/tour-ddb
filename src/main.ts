import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { RedisModule } from './redis/redis.module';
import { REDIS_SESSION } from './redis/redis.provider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const redisSession = app.select(RedisModule).get(REDIS_SESSION, { strict: true });
  app.use(redisSession);
  app.use(compression());
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}

bootstrap();
