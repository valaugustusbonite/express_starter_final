"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_route_1 = __importDefault(require("./cors.route"));
var user_routes_1 = __importDefault(require("./user.routes"));
var request_log_route_1 = __importDefault(require("./request_log.route"));
var healthcheck_controller_1 = __importDefault(require("../controllers/healthcheck.controller"));
var error_handler_controller_1 = __importDefault(require("../controllers/error_handler.controller"));
// routes handle the incoming HTTP requests
var routes = function (app) {
    //=========REQ/RES CONFIGS=========//
    //request logger
    app.use(request_log_route_1.default);
    //rules of API
    app.use(cors_route_1.default);
    //=========API ROUTES=========//
    // user routes
    app.use('/api', user_routes_1.default);
    //=========HEALTH CHECK=========//
    // this is a middleware that simply checks if the API is up and running
    // app routes can be a string, a string pattern, or RegEx
    app.get('/healthcheck', healthcheck_controller_1.default);
    //=========ERROR HANDLING=========//
    //error handler
    app.use(error_handler_controller_1.default.routeError);
};
exports.default = routes;
