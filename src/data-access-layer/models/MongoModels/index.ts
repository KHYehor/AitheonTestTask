'use strict';

import UserModel from "./user";
import IMongoModels from "../../../interfaces/models/MongoModels";

const MongoModels: IMongoModels = {
  IUserModel: new UserModel()
};

export default MongoModels;
