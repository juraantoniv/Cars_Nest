import * as process from 'process';

import { Config } from './config.type';

export default (): Config => ({
  app: {
    port: parseInt(process.env.APP_PORT) || 3005,
    host: process.env.APP_HOST || '0.0.0.0',
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT) || 5433,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD,
  },
  email: {
    user: process.env.EMAIL_SERVICE_USER,
    service: process.env.EMAIL_SERVICE_SERVICE,
    pass: process.env.EMAIL_SERVICE_PASS,
    defaults: process.env.EMAIL_SERVICE_DEFAULTS,
    path: process.env.EMAIL_SERVICE_PATH,
  },
});
