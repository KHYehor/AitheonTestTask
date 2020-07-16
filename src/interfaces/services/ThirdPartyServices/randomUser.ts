'use strict';

import IRandomUserJSON from "../../common/RandomUser";

interface IRandomUser {
  getRandomUser(): Promise<IRandomUserJSON>;
}

export default IRandomUser;
