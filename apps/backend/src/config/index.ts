import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export default {
  nodeEnv: process.env.NODE_ENV || 'development',
  mockData: process.env.MOCK_DATA_DIR_PATH ?? '',
  isProduction: process.env.NODE_ENV === 'production'
};
