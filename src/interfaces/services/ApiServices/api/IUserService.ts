'use strict';

import { IUserLogin } from "../../../common";
import Command from "../../../common/Commands";

interface IUserService {
  generateUser(): Promise<Command>;
  getListOfUsers(): Promise<Command>;
  removeUserById(id: string): Promise<Command>;
  userLogin(userData: IUserLogin): Promise<Command>;
  updateUser(id: string, data: object): Promise<Command>;
}

export default IUserService;
