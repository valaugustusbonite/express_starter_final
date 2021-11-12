import express from 'express';
import config from 'config';
import log from './logger/index';
import connectToMongo from './db/connect';
import routes from './routes';

//gets the config files of the app like the port and host
const port = config.get<number>('port');
const host = config.get<string>('host');

//import express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, host, async () => {
  log.info(`Server listening at http://${host}:${port}`);

  await connectToMongo();

  routes(app);
})