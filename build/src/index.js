"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = require("./controller/logger");
var user_1 = __importDefault(require("./routes/apis/user"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/user', user_1.default);
app.get('/student', logger_1.logger, function (req, res) {
    res.send('you have hit the student route, congratulations!');
    logger_1.logger;
});
app.get('/teacher', function (req, res) {
    res.send(req.url);
});
app.listen(port, function () { return console.log('server is live on port', port); });
exports.default = app;
