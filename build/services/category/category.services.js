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
exports.postCategoryService = exports.getCategoryService = void 0;
const categoryInfoDetails_1 = require("../../models/categoryInfoDetails");
const getCategoryService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, categoryInfoDetails_1.getCategoryModel)();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getCategoryService = getCategoryService;
const postCategoryService = (category_name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, categoryInfoDetails_1.postCategoryModel)(category_name);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.postCategoryService = postCategoryService;
