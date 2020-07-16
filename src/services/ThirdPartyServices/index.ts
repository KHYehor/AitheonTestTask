'use strict';

import type IThirdPartyServices from "../../interfaces/services/ThirdPartyServices";
import RandomUser from './randomUser';

const ThirdPartyServices: IThirdPartyServices = {
  IRandomUser: RandomUser.getInstance(),
};

export default ThirdPartyServices;
