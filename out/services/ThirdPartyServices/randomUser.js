'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const node_fetch_1 = __importDefault(require("node-fetch"));
class RandomUserService {
    constructor() {
        this.getRandomUser = async () => {
            return node_fetch_1.default(`https://randomuser.me/api`)
                .then((res) => res.json());
        };
    }
}
RandomUserService.getInstance = () => new RandomUserService();
exports.default = RandomUserService;
