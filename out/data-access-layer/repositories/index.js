'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoRepositories_1 = __importDefault(require("./MongoRepositories"));
const models_1 = __importDefault(require("../models"));
const repositories = {
    IMongoRepositories: MongoRepositories_1.default(models_1.default.IMongoModels),
};
exports.default = repositories;
