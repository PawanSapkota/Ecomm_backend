"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const auth_service_1 = require("../../services/auth/auth.service");
const userInfoDetails_1 = require("../../models/userInfoDetails");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const bcrypt = __importStar(require("bcryptjs"));
const jwt_services_1 = require("../../services/auth/jwt.services");
const config_1 = require("../../config");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, full_name, photo } = req.body;
        const existingEmail = yield (0, userInfoDetails_1.findByEmail)(email);
        if (existingEmail) {
            return next(new AppError_1.default(400, "Email has been already used."));
        }
        const hashedPassword = yield bcrypt.hash(password, 10);
        const photoPath = photo ? photo : "../../public/default.png";
        const userData = {
            email: email,
            password: hashedPassword,
            full_name: full_name,
            photo: photoPath,
        };
        yield (0, auth_service_1.userRegistrationService)(userData).then((data) => {
            res.status(201).json({
                message: "User Registered Succesfully!!",
                data: data
            });
        });
    }
    catch (error) {
        next(new AppError_1.default(error.status, error.message));
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, userInfoDetails_1.findByEmail)(email);
        if (!user) {
            return next(new AppError_1.default(404, "User not registered."));
        }
        if (user.length === 0 || !(yield bcrypt.compare(password, user.password))) {
            return next(new AppError_1.default(401, "Please Check Your Email or Password."));
        }
        const payload = {
            email: email,
            password: password
        };
        const access_token = (0, jwt_services_1.sign)(payload, config_1.JWT_SECRET, config_1.JWT_EXPIRY);
        const refresh_token = (0, jwt_services_1.sign)(payload, config_1.JWT_SECRET, config_1.JWT_EXPIRY);
        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            maxAge: 36000000,
        });
        res.cookie('access_token', access_token, {
            httpOnly: false,
            secure: false,
            maxAge: 72000000,
        });
        res.status(200).json({
            email,
            status: true,
            message: "Login Successfully"
        });
    }
    catch (error) {
        next(new AppError_1.default(500, "Something went Wrong"));
    }
});
exports.login = login;
