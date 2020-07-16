'use strict';

import type IRandomUser from "../../interfaces/services/ThirdPartyServices/randomUser";
import type IRandomUserJSON from "../../interfaces/common/RandomUser";
// @ts-ignore
import fetch, { Response } from 'node-fetch';

class RandomUserService implements IRandomUser {
  static getInstance = () => new RandomUserService();

  public getRandomUser = async (): Promise<IRandomUserJSON> => {
    return fetch(`https://randomuser.me/api`)
      .then((res: Response) => res.json());
  };
}

export default RandomUserService;
