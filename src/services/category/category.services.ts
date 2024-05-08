import { getCategoryModel, postCategoryModel } from "../../models/categoryInfoDetails";

export const getCategoryService =async()=>{
    try{
        const result = await getCategoryModel();
        return result;
    }
    catch(error:any){
        throw new Error(error)
    }
}

export const postCategoryService =async(category_name:any)=>{
    try{
        const result = await postCategoryModel(category_name)
        return result;
    }
    catch(error:any){
        throw new Error(error)
    }
}