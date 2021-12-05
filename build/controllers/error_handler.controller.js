"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routeErrorHandler = function (req, res, next) {
    var error = new Error('not found');
    return res.status(404).json({
        message: "route: " + error.message,
    });
};
exports.default = {
    routeError: routeErrorHandler
};
