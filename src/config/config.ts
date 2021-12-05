import dotenv from 'dotenv';

dotenv.config();

// server configs
const PORT = process.env.PORT || 1337;
const HOSTNAME = process.env.HOST || 'localhost';
const DB_URI = process.env.DB_URI;

const SERVER = {
  hostname: HOSTNAME,
  port: PORT,
  db_uri: DB_URI,
}

const config = {
  server: SERVER
}

export default config;

