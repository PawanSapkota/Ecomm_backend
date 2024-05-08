"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth/auth.controller");
const authValidation_1 = require("../middlewares/auth/authValidation");
const router = (0, express_1.Router)();
router.route("/register").post(authValidation_1.userRegistrationValidation, auth_controller_1.register);
exports.default = router;
