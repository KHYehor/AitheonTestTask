'use strict';

import {IUserLogin} from "../../common";

interface IUserRepository {
  getAllUsers(): Promise<any>;
  deleteUser(id: string): Promise<any>;
  getUser(userData: IUserLogin): Promise<any>;
  updateUser(id: string, body: object): Promise<any>;
  createUser(name: string, gender: string, email: string, picture: string, password: string): Promise<any>;
}

export default IUserRepository;
