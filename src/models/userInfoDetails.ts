import {getDatabaseConnection} from "../config/database"

export const findByEmail =async(data:any)=>{         
    const con =await getDatabaseConnection()
    let query ='SELECT email FROM user_register WHERE email=?'
    let result:any = await con.promise().query(query,[data])    
    return result[0][0]
}

export const userRegistration =async(data:any)=>{
    const {email,password}= data;
    const con = await getDatabaseConnection();
    let query = 'INSERT INTO user_register (email,password) VALUES (?,?)'
    let result:any = await con.promise().query(query,[email,password])     
    let id:number= result[0].insertId
    query=`SELECT email FROM user_register WHERE register_id = ?`
    result =await con.promise().query(query,[id])     
    return result[0];
}