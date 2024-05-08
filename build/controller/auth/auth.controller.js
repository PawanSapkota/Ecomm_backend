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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const auth_service_1 = require("../../services/auth/auth.service");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_service_1.userRegisterService)(req.body).then((register) => {
            res.status(201).json({
                message: "User Registered Succesfully!!",
                data: register
            });
        });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
