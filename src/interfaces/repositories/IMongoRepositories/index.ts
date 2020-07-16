'use strict';

import IUserRepository from "./IUserRepository";

interface IMongoRepositories {
  IUserRepository: IUserRepository
}

export default IMongoRepositories;
