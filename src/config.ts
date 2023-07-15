import dotenv from 'dotenv';
import Logger from 'bunyan';

dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public REDIS_HOST: string | undefined;

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/chatsea-app-backend';
    this.JWT_TOKEN = process.env.DATABASE_URL || '123456';
    this.NODE_ENV = process.env.DATABASE_URL || '';
    this.SECRET_KEY_ONE = process.env.DATABASE_URL || '';
    this.SECRET_KEY_TWO = process.env.DATABASE_URL || '';
    this.CLIENT_URL = process.env.DATABASE_URL || '';
    this.REDIS_HOST = process.env.REDIS_HOST || '';
  }

  public createLogger(name: string): Logger {
    return Logger.createLogger({ name, level: 'debug' });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined`);
      }
    }
  }
}

export const config: Config = new Config();
