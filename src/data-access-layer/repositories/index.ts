'use strict';

import type IRepositories from "../../interfaces/repositories";
import initMongoRepositories from './MongoRepositories';

import Models from "../models";

const repositories: IRepositories = {
  IMongoRepositories: initMongoRepositories(Models.IMongoModels),
};

export default repositories;
