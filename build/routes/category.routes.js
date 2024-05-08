"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controller/category/category.controller");
const categoryValidation_1 = require("../middlewares/category/categoryValidation");
const router = (0, express_1.Router)();
router.route("/getcategory").get(category_controller_1.getCategory);
router.route("/postcategory").post(categoryValidation_1.postCategoryValidation, category_controller_1.postCategory);
exports.default = router;
