"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var src_1 = __importDefault(require("../../../src"));
var user_1 = __importDefault(require("../../../src/routes/apis/user"));
src_1.default.use('/user', user_1.default);
describe('GET /users routes', function () {
    it('expects index route to work', function () {
        var request = (0, supertest_1.default)(user_1.default);
        var response = request.get('/');
        expect(response).not.toBeFalsy();
    });
});
