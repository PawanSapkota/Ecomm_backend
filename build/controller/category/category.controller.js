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
exports.postCategory = exports.getCategory = void 0;
const AppError_1 = __importDefault(require("../../utils/AppError"));
const category_services_1 = require("../../services/category/category.services");
const getCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, category_services_1.getCategoryService)();
        return res.status(200).json({
            message: "Successfully Retrieved Category Data!",
            data: data
        });
    }
    catch (err) {
        next(new AppError_1.default(err.statusCode, err.message));
    }
});
exports.getCategory = getCategory;
const postCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, category_services_1.postCategoryService)(req.body).then((category) => {
            res.status(201).json({
                message: 'Category Created Successfully!',
                data: category
            });
        });
    }
    catch (error) {
        next(new AppError_1.default(error.statusCode, error.message));
    }
});
exports.postCategory = postCategory;
