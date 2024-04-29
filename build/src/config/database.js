"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const index_1 = require("./index");
const con = mysql2_1.default.createPool({
    host: index_1.DB_HOST,
    user: index_1.DB_USERNAME,
    password: index_1.DB_PASSWORD,
    database: index_1.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
con.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database: ', err);
    }
    else {
        console.log('Database connected successfully!!!');
        connection.release();
    }
});
exports.default = con.promise();
