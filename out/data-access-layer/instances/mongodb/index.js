'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// @ts-ignore
const MONGODBURI = process.env.MONGODBURI;
const initMongoInstance = async () => {
    // Connection init
    await mongoose_1.default.connect(MONGODBURI, {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true
    });
    console.log('MongodbCluster connected...');
    // Event handlers
    mongoose_1.default.connection.on('error', console.error);
};
exports.default = initMongoInstance;
