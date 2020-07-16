'use strict';

import type IUserModel from "../../../interfaces/models/MongoModels/user";
import type { IUserLogin } from '../../../interfaces/common';
import IUserRepository from "../../../interfaces/repositories/IMongoRepositories/IUserRepository";

class UserRepository implements IUserRepository{
  private UserModel: IUserModel;
  constructor(UserModel: IUserModel) {
    this.UserModel = UserModel;
  }
  static getInstanse = (UserModel: IUserModel) => new UserRepository(UserModel);
  public getAllUsers = async () => {
    return this.UserModel.getAllUsers();
  };

  public deleteUser = async (id: string) => {
    return this.UserModel.deleteById(id);
  };

  public getUser = async (userData: IUserLogin) => {
    return this.UserModel.findUserByLogin(userData);
  };

  public updateUser = async (id: string, body: object) => {
    return this.UserModel.updateUserById(id, body);
  };

  public createUser = async (
    name: string,
    gender: string,
    email: string,
    picture: string,
    password: string
  ) => {
    return this.UserModel.createUser(name, gender, email, picture, password);
  };

}

export default UserRepository;
