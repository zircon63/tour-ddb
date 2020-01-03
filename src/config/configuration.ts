export default () => ({
  auth: {
    salt: process.env.SALT,
    secret: process.env.SESSION_SECRET,
    ttl: process.env.SESSION_TTL,
    sessionName: process.env.SESSION_NAME,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    socket: process.env.REDIS_SOCKET,
    dbs: {
      session: process.env.REDIS_SESSION,
    },
  },
  database: {
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});
