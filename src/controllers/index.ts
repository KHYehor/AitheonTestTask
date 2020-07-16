'use strict';

import type { IControllers } from '../interfaces/controllers';
import Services from "../services";
import initApiControllers from './api';

const Controllers: IControllers = {
  IApiControllers: initApiControllers(Services.IApiServices.IApiServicesApi),
};

export default Controllers;
