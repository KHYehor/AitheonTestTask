'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiServices_1 = __importDefault(require("./ApiServices"));
const ThirdPartyServices_1 = __importDefault(require("./ThirdPartyServices"));
const Services = {
    IApiServices: ApiServices_1.default,
    IThirdPartyServices: ThirdPartyServices_1.default,
};
exports.default = Services;
