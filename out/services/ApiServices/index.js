'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_layer_1 = __importDefault(require("../../data-access-layer"));
const ThirdPartyServices_1 = __importDefault(require("./../ThirdPartyServices"));
const api_1 = __importDefault(require("./api"));
const ApiServices = {
    IApiServicesApi: api_1.default(data_access_layer_1.default, ThirdPartyServices_1.default),
};
exports.default = ApiServices;
