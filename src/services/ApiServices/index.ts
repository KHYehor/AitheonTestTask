'use strict';

import type IApiServices from "../../interfaces/services/ApiServices";
import Repositories from '../../data-access-layer';
import ThirdPartyServices from './../ThirdPartyServices';

import initApiServices from "./api";

const ApiServices: IApiServices = {
  IApiServicesApi: initApiServices(Repositories, ThirdPartyServices),
};

export default ApiServices;
