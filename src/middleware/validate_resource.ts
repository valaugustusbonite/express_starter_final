import { Request, Response, NextFunction } from 'express'; 
import {AnyZodObject} from 'zod';

//validates if the http object is compliant of the model
const validate = (schema: AnyZodObject) => {

  (req: Request, res: Response, next: NextFunction) => {
    try {
      //create a schema to be able to validate the body, query, and req parameters
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
    } catch (e: any) {
      return res.status(400).send(e.errors);
      
    }
  }
}

export default validate;