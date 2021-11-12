import { Express, Request, Response } from "express";

// routes handle the incoming HTTP requests
const routes = (app: Express) => {

  // this is a middleware that simply checks if the API is up and running
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  })
}

export default routes;