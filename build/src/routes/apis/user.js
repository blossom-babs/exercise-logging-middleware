"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = require("../../controller/logger");
var routes = express_1.default.Router();
routes.get('/', logger_1.logger, function (req, res) {
    // res.send('you have hit the user route, congratulations!');
    res.json({ name: "frodo" });
    logger_1.logger;
});
routes.get('/cart', logger_1.logger, function (req, res) {
    res.send('you have hit the cart route, congratulations!');
    logger_1.logger;
});
routes.get('/checkout', function (req, res) {
    res.send('you have hit the checkout route, congratulations!');
    console.log(req.url);
});
exports.default = routes;
