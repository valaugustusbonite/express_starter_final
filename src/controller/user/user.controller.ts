import { Request, Response } from "express";
import log from "../../logger";
import UserModel from "../../models/user.model";
import { createUserService } from "../../service/user.service";



const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    return user;
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    UserModel.find()
      .exec()
      .then((results) => {
        return res.status(200).json({
          users: results,
          count: results.length,
        });
      })
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      error
    })
  }
}

export default {
  createUserHandler,
  getUsers,
}