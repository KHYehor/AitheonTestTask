'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res) => {
    console.error(err);
    res.status(500).json(err);
};
exports.default = errorHandler;
