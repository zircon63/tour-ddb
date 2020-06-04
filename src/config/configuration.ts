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
  type: process.env.TYPE,
  client: {
    path: process.env.CLIENT_PATH,
  },
  database: {
    local: {
      host: process.env.DATABASE_LOCAL_HOST,
      name: process.env.DATABASE_LOCAL_NAME,
      port: parseInt(process.env.DATABASE_LOCAL_PORT, 10),
      username: process.env.DATABASE_LOCAL_USER,
      password: process.env.DATABASE_LOCAL_PASSWORD,
    },
    central: {
      host: process.env.DATABASE_CENTRAL_HOST,
      name: process.env.DATABASE_CENTRAL_NAME,
      port: parseInt(process.env.DATABASE_CENTRAL_PORT, 10),
      username: process.env.DATABASE_CENTRAL_USER,
      password: process.env.DATABASE_CENTRAL_PASSWORD,
    },
  },
});
