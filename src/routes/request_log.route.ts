import { Router, Request, Response, NextFunction } from 'express';
import log from '../config/logger';

const router = Router();

const NAMESPACE = 'Server Request/Response'

router.use((req: Request, res: Response, next: NextFunction) => {
  // logs the request

  if (req.socket.remoteAddress) {
    log.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
  } else {
    log.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}]`);
  }

  res.on('finish', () => {
      // logs the response
      log.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
  })

  next();
});

export default router;