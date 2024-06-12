import {getDatabaseConnection} from "../config/database"


 export const saveProductInfo =async(data:any)=>{
    let query, result;
    const {product_name,original_price,sale_price,product_description,image_filename} = data
    const con = await getDatabaseConnection()
     query = `INSERT INTO product (product_name,original_price,sale_price,product_description) VALUES (?,?,?,?)`
     result =await con.promise().query(query,[product_name,original_price,sale_price,product_description])
     query = `INSERT INTO product_image (image_filename) VALUES (?)`
     result =await con.promise().query(query,[image_filename])
     return result[0]

} 
