'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instances_1 = __importDefault(require("./instances"));
const repositories_1 = __importDefault(require("./repositories"));
instances_1.default()
    .then(() => console.log('DB instances inited...'))
    .catch(console.error);
exports.default = repositories_1.default;
