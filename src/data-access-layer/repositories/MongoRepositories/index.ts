'use strict';

import type IMongoRepositories from "../../../interfaces/repositories/IMongoRepositories";
import type IMongoModels from "../../../interfaces/models/MongoModels";

import UserRepository from "./user";

const initMongoRepositories = (MongoModels: IMongoModels): IMongoRepositories => ({
  IUserRepository: UserRepository.getInstanse(MongoModels.IUserModel)
});

export default initMongoRepositories;
