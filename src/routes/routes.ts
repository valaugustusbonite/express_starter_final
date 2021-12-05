import { Express } from "express";
import corsConfig from './cors.route';
import userRoute from './user.routes';
import reqLogger from './request_log.route';
import serverHealthController from '../controllers/healthcheck.controller';
import errorHandler from '../controllers/error_handler.controller';

// routes handle the incoming HTTP requests
const routes = (app: Express) => {

  //=========REQ/RES CONFIGS=========//
  
  //request logger
  app.use(reqLogger);
  //rules of API
  app.use(corsConfig);


  //=========API ROUTES=========//

  // user routes
  app.use('/api', userRoute);

  
  //=========HEALTH CHECK=========//
  // this is a middleware that simply checks if the API is up and running
  // app routes can be a string, a string pattern, or RegEx
  app.get('/healthcheck', serverHealthController);

  //=========ERROR HANDLING=========//
  //error handler
  app.use(errorHandler.routeError);

}

export default routes;