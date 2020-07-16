'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomUser_1 = __importDefault(require("./randomUser"));
const ThirdPartyServices = {
    IRandomUser: randomUser_1.default.getInstance(),
};
exports.default = ThirdPartyServices;
