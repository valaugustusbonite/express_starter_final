//imports
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import config from 'config';
import log from './logger/index';
import connectToMongo from './db/connect';
import routes from './routes/routes';

//gets the config files of the app like the port and host
const port = config.get<number>('port');
const host = config.get<string>('host');

//import express method 
const app = express();

// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(express.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(express.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
//app.use(express.urlencoded({extended: true}));

//server
app.listen(port, host, async () => {
  log.info(`Server listening at http://${host}:${port}`);

  await connectToMongo();

  routes(app);
})