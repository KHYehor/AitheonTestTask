'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const setApiRoutes = (ApiControllers) => ({
    usersRouter: users_1.default(ApiControllers.UserController),
});
exports.default = setApiRoutes;
