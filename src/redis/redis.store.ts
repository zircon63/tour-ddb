import { createClient } from 'redis';
import * as ConnectRedis from 'connect-redis';
import * as session from 'express-session';

const RedisSessionClient = createClient({
  port: Number(process.env.REDIS_PORT),
  host: process.env.REDIS_HOST,
  path: '',
  db: process.env.REDIS_SESSION,
});
const connectRedis = ConnectRedis(session);
export const REDIS_STORE = new connectRedis({ client: RedisSessionClient, ttl: process.env.SESSION_TTL });
