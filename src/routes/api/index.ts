'use strict';

import type { Router } from "express";

import setUsersRoute from "./users";
import IApiControllers from "../../interfaces/controllers/api";

const setApiRoutes = (ApiControllers: IApiControllers) => ({
  usersRouter: setUsersRoute(ApiControllers.UserController),
});

export default setApiRoutes;
