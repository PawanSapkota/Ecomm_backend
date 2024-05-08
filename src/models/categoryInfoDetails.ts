import {getDatabaseConnection} from "../config/database"

export const getCategoryModel=async()=>{
    const con = await getDatabaseConnection();
    let query = 'SELECT * FROM category';
    let result:any =  await con.promise().query(query);
    console.log(result)    
    return result[0];
}

export const postCategoryModel =async(data_to_save:any)=>{
    const {category_name} = data_to_save    
    const con =await getDatabaseConnection();
    let query = "INSERT INTO category (category_name) VALUES (?)"
    let result : any = await con.promise().query(query,[category_name])       
    let id:number= result[0].insertId
    query=`SELECT * FROM category WHERE category_id = ?`
    result =await con.promise().query(query,[id])
    return result[0]
}