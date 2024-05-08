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
exports.userRegistration = exports.findByEmail = void 0;
const database_1 = require("../config/database");
const findByEmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const con = yield (0, database_1.getDatabaseConnection)();
    let query = 'SELECT email FROM user_register WHERE email=?';
    let result = yield con.promise().query(query, [data]);
    return result[0][0];
});
exports.findByEmail = findByEmail;
const userRegistration = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const con = yield (0, database_1.getDatabaseConnection)();
    let query = 'INSERT INTO user_register (email,password) VALUES (?,?)';
    let result = yield con.promise().query(query, [email, password]);
    let id = result[0].insertId;
    query = `SELECT email FROM user_register WHERE register_id = ?`;
    result = yield con.promise().query(query, [id]);
    return result[0];
});
exports.userRegistration = userRegistration;
