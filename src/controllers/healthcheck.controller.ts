import { Response, Request, NextFunction } from 'express';

const NAMESPACE = 'HEALTH CHECK CONTROLLER';

const serverHealthController = (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Server is up and running'
  });
}

export default serverHealthController;