'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepository {
    constructor(UserModel) {
        this.getAllUsers = async () => {
            return this.UserModel.getAllUsers();
        };
        this.deleteUser = async (id) => {
            return this.UserModel.deleteById(id);
        };
        this.getUser = async (userData) => {
            return this.UserModel.findUserByLogin(userData);
        };
        this.updateUser = async (id, body) => {
            return this.UserModel.updateUserById(id, body);
        };
        this.createUser = async (name, gender, email, picture, password) => {
            return this.UserModel.createUser(name, gender, email, picture, password);
        };
        this.UserModel = UserModel;
    }
}
UserRepository.getInstanse = (UserModel) => new UserRepository(UserModel);
exports.default = UserRepository;
