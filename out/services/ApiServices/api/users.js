'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor(UserRepository, RandomUserService) {
        this.generateUser = async () => {
            // Get Random User from service;
            const randomUser = await this.RandomUserService.getRandomUser();
            const { name, gender, email, picture, login } = randomUser.results[0];
            const fullName = name.title.concat(name.first, name.last);
            // Adding user to service;
            await this.UserRepository.createUser(fullName, gender, email, picture.medium, login.password);
            return { status: true, data: {} };
        };
        this.getListOfUsers = async () => {
            const result = await this.UserRepository.getAllUsers();
            return { status: true, data: result };
        };
        this.removeUserById = async (id) => {
            const result = await this.UserRepository.deleteUser(id);
            return { status: true, data: result };
        };
        this.userLogin = async (userData) => {
            if (!userData.email && !userData.password) {
                return { status: false, data: {} };
            }
            const user = await this.UserRepository.getUser(userData);
            if (!user) {
                return { status: false, data: user };
            }
            return { status: true, data: user };
        };
        this.updateUser = async (id, data) => {
            try {
                // @ts-ignore
                // Filtering null fields
                const filteredData = Object.keys(data).reduce((prev, cur) => {
                    // @ts-ignore
                    if (data[cur])
                        prev[cur] = data[cur];
                    return prev;
                }, {});
                const user = await this.UserRepository.updateUser(id, filteredData);
                if (!user) {
                    return { status: false, data: user };
                }
                return { status: true, data: user };
            }
            catch (err) {
                if (err.code === 11000)
                    return {
                        status: false,
                        data: { reason: `Duplicate data ${err.keyValue.name}` }
                    };
                throw err;
            }
        };
        this.UserRepository = UserRepository;
        this.RandomUserService = RandomUserService;
    }
}
UserService.getInstance = (UserRepository, RandomUserService) => new UserService(UserRepository, RandomUserService);
exports.default = UserService;
