import { Express, NextFunction, Request, Response } from "express";

// routes handle the incoming HTTP requests
const routes = (app: Express) => {

  //rules of API

  app.use((req: Request, res: Response, next: NextFunction) => {
    //temporary allow all requests from all addresses
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
      return res.status(200).json({});
    }

    next();

  });

  

  // this is a middleware that simply checks if the API is up and running
  // app routes can be a string, a string pattern, or RegEx
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  })

  //error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found');
    return res.status(404).json({
      message: error.message
    });

  })

}

export default routes;