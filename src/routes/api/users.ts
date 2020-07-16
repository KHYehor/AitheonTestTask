'use strict';

import { Router } from 'express';
import IUsersController from "../../interfaces/controllers/api/IUserController";

const usersRouter = Router();

const setUsersRoute = (controller: IUsersController): Router => {
  usersRouter.get('/users', controller.getListOfUsers);
  usersRouter.get('/users/generate', controller.generateUser);
  usersRouter.post('/users/login', controller.userLogin);
  usersRouter.delete('/users/:userId', controller.removeUserById);
  usersRouter.put('/users/:userId', controller.updateUserById);
  return usersRouter;
}

export default setUsersRoute;
