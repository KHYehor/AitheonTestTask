'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter = express_1.Router();
const setUsersRoute = (controller) => {
    usersRouter.get('/users', controller.getListOfUsers);
    usersRouter.get('/users/generate', controller.generateUser);
    usersRouter.post('/users/login', controller.userLogin);
    usersRouter.delete('/users/:userId', controller.removeUserById);
    usersRouter.put('/users/:userId', controller.updateUserById);
    return usersRouter;
};
exports.default = setUsersRoute;
