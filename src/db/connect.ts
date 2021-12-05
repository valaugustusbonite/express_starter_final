import mongoose from 'mongoose';  

import log from '../config/logger';
import config from '../config/config';

const NAMESPACE = 'DB CONNECT';

const connectToMongo = async () => {
  const dbUri = config.server.db_uri as string;

  try {
    let isConnected = await mongoose.connect(dbUri);
    
    if (isConnected) {
      log.info(NAMESPACE, 'Connected to Mongo');
    }
  } catch (error: any) {
    log.error(NAMESPACE, error.message, error);
    process.exit(1);
  }
}

export default connectToMongo;