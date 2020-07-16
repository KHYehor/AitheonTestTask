'use strict';

import type {IUserLogin, Command} from "../../../interfaces/common";
import type IUserService from "../../../interfaces/services/ApiServices/api/IUserService";
import type IRandomUserJSON from "../../../interfaces/common/RandomUser";
import type IUserRepository from "../../../interfaces/repositories/IMongoRepositories/IUserRepository";
import type IRandomUser from "../../../interfaces/services/ThirdPartyServices/randomUser";

class UserService implements IUserService {
  private UserRepository: IUserRepository;
  private RandomUserService: IRandomUser;

  constructor(UserRepository: IUserRepository, RandomUserService: IRandomUser) {
    this.UserRepository = UserRepository;
    this.RandomUserService = RandomUserService;
  }

  static getInstance = (
    UserRepository: IUserRepository,
    RandomUserService: IRandomUser
  ) => new UserService(
    UserRepository,
    RandomUserService
  );

  public generateUser = async (): Promise<Command> => {
    // Get Random User from service;
    const randomUser: IRandomUserJSON = await this.RandomUserService.getRandomUser();
    const { name, gender, email, picture, login } = randomUser.results[0];
    const fullName = name.title.concat(name.first, name.last);
    // Adding user to service;
    await this.UserRepository.createUser(fullName, gender, email, picture.medium, login.password);
    return { status: true, data: {} };
  };

  public getListOfUsers = async (): Promise<Command> => {
    const result = await this.UserRepository.getAllUsers();
    return { status: true, data: result };
  };

  public removeUserById = async (id: string): Promise<Command> => {
    const result =  await this.UserRepository.deleteUser(id);
    return { status: true, data: result };
  };

  public userLogin = async (userData: IUserLogin): Promise<Command> => {
    if (!userData.email && !userData.password) {
      return { status: false, data: {} };
    }
    const user = await this.UserRepository.getUser(userData);
    if (!user) {
      return { status: false, data: user };
    }
    return { status: true, data: user };
  };

  public updateUser = async (id: string, data: object): Promise<Command> => {
    try {
      // @ts-ignore
      // Filtering null fields
      const filteredData = Object.keys(data).reduce((prev, cur) => {
        // @ts-ignore
        if (data[cur]) prev[cur] = data[cur];
        return prev;
      }, {});
      const user = await this.UserRepository.updateUser(id, filteredData);
      if (!user) {
        return { status: false, data: user };
      }
      return { status: true, data: user };
    } catch (err) {
      if (err.code === 11000) return {
        status: false,
        data: { reason: `Duplicate data ${err.keyValue.name}` }
      };
      throw err;
    }
  };
}

export default UserService;
