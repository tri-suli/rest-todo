import * as dotenv from 'dotenv';
import { DBConfig } from '../db/mongo.interface';

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  cluster: process.env.DB_CLUSTER,
  retry_writes: process.env.DB_RETRY_WRITES,
  write_concern: process.env.DB_WRITE_CONCERN,
};

export const dbConfig = (): DBConfig => ({
  connection: `${config.host}://${config.user}:${config.pass}@${config.cluster}/${config.name}?retryWrites=${config.retry_writes}&w=${config.write_concern}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
});
