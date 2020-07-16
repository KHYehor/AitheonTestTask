'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const api_1 = __importDefault(require("./api"));
const Controllers = {
    IApiControllers: api_1.default(services_1.default.IApiServices.IApiServicesApi),
};
exports.default = Controllers;
