"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.COOKIE_EXPIRY = exports.REFRESH_EXPIRY = exports.REFRESH_SECRET = exports.JWT_EXPIRY = exports.JWT_SECRET = exports.DB_USERNAME = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_HOST = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env, exports.PORT = _a.PORT, exports.DB_HOST = _a.DB_HOST, exports.DB_NAME = _a.DB_NAME, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.DB_USERNAME = _a.DB_USERNAME, exports.JWT_SECRET = _a.JWT_SECRET, exports.JWT_EXPIRY = _a.JWT_EXPIRY, exports.REFRESH_SECRET = _a.REFRESH_SECRET, exports.REFRESH_EXPIRY = _a.REFRESH_EXPIRY, exports.COOKIE_EXPIRY = _a.COOKIE_EXPIRY;
