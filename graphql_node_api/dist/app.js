"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use('/koe', (req, res, next) => {
            res.send({
                hello: 'Koé Manolo'
            });
        });
    }
}
exports.default = new App().express;
