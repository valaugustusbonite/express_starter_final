import express, { Express, Request, Response } from "express";

// routes handle the incoming HTTP requests
const router = express.Router();

//router.post('/api/users', createUserHandler);
router.get('/users', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'potangina mooooo'
  });
});

export default router;