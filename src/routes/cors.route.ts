import { Router, NextFunction, Request, Response } from 'express';

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  //temporary allow all requests from all addresses
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
    return res.status(200).json({});
  }

  next();

});

export default router;