'use strict';

import type { Document } from "mongoose";
import {IUserLogin} from "../../common";

interface IUserModel extends Document {
  email: string;
  gender: string;
  picture: string;
  password: string;
  removed: boolean;
  getAllUsers(): Promise<any>;
  deleteById(id: string): Promise<any>;
  findUserByLogin(userData: IUserLogin): Promise<any>;
  updateUserById(id: string, body: object): Promise<any>;
  createUser(name: string, gender: string, email: string, picture: string, password: string): Promise<any>;
}

export default IUserModel;
