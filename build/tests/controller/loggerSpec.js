"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("../../src/controller/logger");
describe('logger function', function () {
    it('logs url to console', function () {
        expect(logger_1.logger).not.toBeFalsy();
        expect(logger_1.logger.length).toBeGreaterThan(1);
    });
});
