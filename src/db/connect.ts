import mongoose from 'mongoose';  
import config from 'config';
import log from '../logger';

 const connectToMongo = async () => {
  const dbUri = config.get<string>('dbUri');

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