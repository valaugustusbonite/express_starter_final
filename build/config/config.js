"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 1337;
var HOSTNAME = process.env.HOST || 'localhost';
var DB_URI = process.env.DB_URI;
var SERVER = {
    hostname: HOSTNAME,
    port: PORT,
    db_uri: DB_URI,
};
var config = {
    server: SERVER
};
exports.default = config;
