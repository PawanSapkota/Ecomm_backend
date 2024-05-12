"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controller/role/role.controller");
const router = (0, express_1.Router)();
router.route("/changerole").post(role_controller_1.role);
exports.default = router;
