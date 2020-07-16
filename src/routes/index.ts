'use strict';

import type { Express } from 'express';
import type IRoutes from "../interfaces/routes";

import Controllers from "../controllers";
import setApiRoutes from './api';

const { usersRouter } = setApiRoutes(Controllers.IApiControllers);

const Routes: IRoutes = {
  IUsersRouter: usersRouter,
};

const setAppRoutes = (app: Express) => {
  app.use('/api', usersRouter);
};

export default setAppRoutes;
