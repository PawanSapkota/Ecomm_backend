"use strict";
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
exports.role = void 0;
const AppError_1 = __importDefault(require("../../utils/AppError"));
const userInfoDetails_1 = require("../../models/userInfoDetails");
const role = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { register_id, role } = req.body;
        if (!register_id) {
            return next(new AppError_1.default(404, "Please send the register_id"));
        }
        yield (0, userInfoDetails_1.changeRole)(req.body).then(() => {
            res.status(200).json({
                status: true,
                message: "Role Changed!!",
                data: role
            });
        });
    }
    catch (error) {
        next(new AppError_1.default(error.statusCode, error.message));
    }
});
exports.role = role;
