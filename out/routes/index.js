'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = __importDefault(require("../controllers"));
const api_1 = __importDefault(require("./api"));
const { usersRouter } = api_1.default(controllers_1.default.IApiControllers);
const Routes = {
    IUsersRouter: usersRouter,
};
const setAppRoutes = (app) => {
    app.use('/api', usersRouter);
};
exports.default = setAppRoutes;
