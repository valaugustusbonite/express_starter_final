import { Response, Request, NextFunction } from 'express';

const routeErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: `route: ${error.message}`,
  });
}

export default {
  routeError: routeErrorHandler
}