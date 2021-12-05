"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NAMESPACE = 'HEALTH CHECK CONTROLLER';
var serverHealthController = function (req, res) {
    return res.status(200).json({
        message: 'Server is up and running'
    });
};
exports.default = serverHealthController;
