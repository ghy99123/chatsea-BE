import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabse');

export default function () {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('successfully connected to database');
      })
      .catch((err) => {
        log.error('Error connecting to database', err);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnect', connect);
}
