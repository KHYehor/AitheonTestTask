'use strict';

import type IApiServicesApi from "../../../interfaces/services/ApiServices/api";
import type IRepositories from "../../../interfaces/repositories";
import type IThirdPartyServices from "../../../interfaces/services/ThirdPartyServices";
import UserService from "./users";

const initApiServices = (
  Repositories: IRepositories,
  ThirdPartyServices: IThirdPartyServices,
): IApiServicesApi => ({
  IUserService: UserService.getInstance(
    Repositories.IMongoRepositories.IUserRepository,
    ThirdPartyServices.IRandomUser,
  ),
});

export default initApiServices;
