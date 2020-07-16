'use strict';

import IApiServices from "./ApiServices";
import IThirdPartyServices from "./ThirdPartyServices";

interface IServices {
  IApiServices: IApiServices,
  IThirdPartyServices: IThirdPartyServices,
}

export default IServices;
