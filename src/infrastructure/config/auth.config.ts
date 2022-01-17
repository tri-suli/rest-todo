import * as DotEnv from 'dotenv';

DotEnv.config();

const configuration = {
  // Bcrypt
  round: parseInt(process.env.BCRYPT_ROUND) || 10,

  // JWT
  secret_key: process.env.JWT_SECRET,
};

export default configuration;
