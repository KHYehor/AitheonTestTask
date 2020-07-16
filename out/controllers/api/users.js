'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UsersController {
    constructor(UserService) {
        this.generateUser = async (req, res, next) => {
            try {
                const { status } = await this.UserService.generateUser();
                if (status)
                    res.status(200).end();
                else
                    res.status(418).end();
            }
            catch (err) {
                next(err);
            }
        };
        this.getListOfUsers = async (req, res, next) => {
            try {
                const { status, data } = await this.UserService.getListOfUsers();
                if (status)
                    res.status(200).json(data);
                else
                    res.status(418).end();
            }
            catch (err) {
                next(err);
            }
        };
        this.removeUserById = async (req, res, next) => {
            try {
                const { userId } = req.params;
                const { status, data } = await this.UserService.removeUserById(userId);
                if (status)
                    res.status(200).json(data);
                else
                    res.status(404).end();
            }
            catch (err) {
                next(err);
            }
        };
        this.userLogin = async (req, res, next) => {
            try {
                const { email, password } = req.body;
                const { status } = await this.UserService.userLogin({ email, password });
                if (status)
                    res.status(200);
                else
                    res.status(404).end();
            }
            catch (err) {
                next(err);
            }
        };
        this.updateUserById = async (req, res, next) => {
            try {
                const { userId } = req.params;
                const { name, gender, email, picture, password } = req.body;
                const { status, data } = await this.UserService.updateUser(userId, { name, gender, email, picture, password });
                if (status)
                    res.status(200).json(data);
                // @ts-ignore
                else if (data === null || data === void 0 ? void 0 : data.reason)
                    res.status(401).send(data.reason);
                else
                    res.status(404).end();
            }
            catch (err) {
                next(err);
            }
        };
        this.UserService = UserService;
    }
}
UsersController.getInstanse = (UserService) => new UsersController(UserService);
exports.default = UsersController;
