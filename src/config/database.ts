import mysql,{Pool,PoolConnection,createPool} from 'mysql2';
import {DB_HOST,DB_NAME,DB_PASSWORD,DB_USERNAME} from  './index'

 const connection:Pool = createPool({    
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    connectionLimit: 10
});

export function getDatabaseConnection(): Promise<PoolConnection> {
    return new Promise((resolve, reject) => {
        connection.getConnection((err: any, con: PoolConnection) => {
            if (err) {
                console.log("Failed to connect to MySQL Database:",  err);
                reject(err); 
            } else {    
                resolve(con)
                console.log("Database connected successfully!!!");
            }
        });
    });
}


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
