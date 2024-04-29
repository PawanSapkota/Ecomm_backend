"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConnection = void 0;
const mysql2_1 = require("mysql2");
const index_1 = require("./index");
const connection = (0, mysql2_1.createPool)({
    host: index_1.DB_HOST,
    user: index_1.DB_USERNAME,
    password: index_1.DB_PASSWORD,
    database: index_1.DB_NAME,
    connectionLimit: 10
});
function getDatabaseConnection() {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, con) => {
            if (err) {
                console.log("Failed to connect to MySQL Database:", err);
                reject(err);
            }
            else {
                resolve(con);
                console.log("Database connected successfully!!!");
            }
        });
    });
}
exports.getDatabaseConnection = getDatabaseConnection;
// export function getDatabaseConnection(){
//     connection.getConnection((err,conn:PoolConnection)=>{
//         if(err){
//             console.log("Error connection to Database: ", err);
//             throw err;
//         }else{
//             conn.release();
//             console.log("Database is connected successfully..");
//         }
//     })
// }
