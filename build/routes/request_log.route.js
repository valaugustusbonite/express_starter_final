"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logger_1 = __importDefault(require("../config/logger"));
var router = (0, express_1.Router)();
var NAMESPACE = 'Server Request/Response';
router.use(function (req, res, next) {
    // logs the request
    if (req.socket.remoteAddress) {
        logger_1.default.info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "]");
    }
    else {
        logger_1.default.info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "]");
    }
    res.on('finish', function () {
        // logs the response
        logger_1.default.info(NAMESPACE, "METHOD: [" + req.method + "] - URL: [" + req.url + "] - STATUS: [" + res.statusCode + "] - IP: [" + req.socket.remoteAddress + "]");
    });
    next();
});
exports.default = router;
