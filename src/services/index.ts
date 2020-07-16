'use strict';

import type IServices from "../interfaces/services";
import ApiServices from "./ApiServices";
import ThirdPartyServices from "./ThirdPartyServices";

const Services: IServices = {
  IApiServices: ApiServices,
  IThirdPartyServices: ThirdPartyServices,
}

export default Services;

