import * as DotEnv from 'dotenv';

DotEnv.config();

const configuration = {
  round: parseInt(process.env.BCRYPT_ROUND) || 10,
  secret_key: 'secret_key',
};

export default configuration;
