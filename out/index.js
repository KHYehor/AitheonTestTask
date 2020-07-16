'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Importing dev package
 */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
/**
 * Importing setters
 */
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
// @ts-ignore
const PORT = process.env.PORT;
// @ts-ignore
const HOST = process.env.HOST;
/**
 * Init app
 */
const App = express_1.default();
/**
 * Setting enpoints, middlewares
 */
App.use(body_parser_1.default.json());
routes_1.default(App);
middlewares_1.default(App);
/**
 * Start listening app
 */
App
    .listen(PORT, HOST, () => {
    console.log(`Listening server: ${HOST}:${PORT}...`);
});
