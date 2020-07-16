'use strict';

import type IApiControllers from "../../interfaces/controllers/api";
import type IApiServicesApi from "../../interfaces/services/ApiServices/api";
import UsersController from "./users";

const initApiControllers = (ApiServicesApi: IApiServicesApi): IApiControllers => ({
  UserController: UsersController.getInstanse(ApiServicesApi.IUserService),
});

export default initApiControllers;
