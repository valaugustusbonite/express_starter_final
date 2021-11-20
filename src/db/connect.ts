import mongoose from 'mongoose';  
import config from 'config';
import dotenv from 'dotenv';

import log from '../logger';

dotenv.config();

 const connectToMongo = async () => {
  const dbUri = process.env.DB_URI as string;

  try {
    let isConnected = await mongoose.connect(dbUri);
    
    if (isConnected) {
      log.info('Connected to Mongo');
    }
  } catch (error) {
    log.error('db error', error);
    process.exit(1);
  }
}

export default connectToMongo;