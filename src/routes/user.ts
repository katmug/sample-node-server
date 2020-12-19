import { Router, Request, Response } from 'express';

import userController from '../controllers/user';

const route = Router();
export default (app: Router) => {
  app.use('/user', route);

  route.get('/', (req: Request, res: Response) => {
   userController.list(req,res);
  });

  
  route.post('/', (req: Request, res: Response) => {
   userController.create(req,res);
  });
};