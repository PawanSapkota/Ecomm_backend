import {getDatabaseConnection} from "../config/database"

export const findByEmail =async(data:any)=>{         
    const con =await getDatabaseConnection()
    let query ='SELECT email,password FROM users WHERE email=?'
    let result:any = await con.promise().query(query,[data])    
    return result[0][0]
}

export const userRegistration =async(data:any)=>{
    const {email,password,full_name,photo}= data;
    const con = await getDatabaseConnection();
    let query = 'INSERT INTO users (email,password,full_name,photo) VALUES (?,?,?,?)'
    let result:any = await con.promise().query(query,[email,password,full_name,photo])     
    let id:number= result[0].insertId
    query=`SELECT email,password,full_name,photo FROM users WHERE user_id = ?`
    result =await con.promise().query(query,[id])     
    return result[0];
}

export const changeRole =async(data:any)=>{
    const {role_id,user_id} = data;
    const con = await getDatabaseConnection();
    let query =`UPDATE users set role_id = ? where user_id =?`;
    let result:any = await con.promise().query(query,[role_id,user_id])
    let id:number =result[0].insertId
    query=`SELECT role_name FROM roles WHERE role_id=?`
    result = await con.promise().query(query,[id])
    return result[0]
}