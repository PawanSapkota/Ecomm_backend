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
exports.postCategoryModel = exports.getCategoryModel = void 0;
const database_1 = require("../config/database");
const getCategoryModel = () => __awaiter(void 0, void 0, void 0, function* () {
    const con = yield (0, database_1.getDatabaseConnection)();
    let query = 'SELECT * FROM category';
    let result = yield con.promise().query(query);
    console.log(result);
    return result[0];
});
exports.getCategoryModel = getCategoryModel;
const postCategoryModel = (data_to_save) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_name } = data_to_save;
    const con = yield (0, database_1.getDatabaseConnection)();
    let query = "INSERT INTO category (category_name) VALUES (?)";
    let result = yield con.promise().query(query, [category_name]);
    let id = result[0].insertId;
    query = `SELECT * FROM category WHERE category_id = ?`;
    result = yield con.promise().query(query, [id]);
    return result[0];
});
exports.postCategoryModel = postCategoryModel;
