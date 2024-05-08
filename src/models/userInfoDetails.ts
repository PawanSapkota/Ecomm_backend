import {getDatabaseConnection} from "../config/database"

export const findByEmail =async(email:string)=>{
    const con = getDatabaseConnection()
    let query ='SELECT email FROM user_register WHERE email=?'
    let result:any = (await con).promise().query(query,[email])
    return result[0]
}

export const userRegistration =async(data:any)=>{
    const {email,password}= data;
    const con = getDatabaseConnection();
    let query = 'INSERT INTO user_register (email,password) VALUES (?,?)'
    let result:any = (await con).promise().query(query,[email,password])
    console.log(result[0])
   
    return result[0];
    
    

}