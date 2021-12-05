"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// routes handle the incoming HTTP requests
var router = express_1.default.Router();
//router.post('/api/users', createUserHandler);
router.get('/users', function (req, res) {
    return res.status(200).json({
        message: 'potangina mooooo'
    });
});
exports.default = router;
