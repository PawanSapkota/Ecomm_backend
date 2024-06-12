import { NextFunction, Response, Request } from "express"
import AppError from "../../utils/AppError"
import { getCategoryService, postCategoryService } from "../../services/category/category.services"

type Functions = {
    getCategory: (req: Request, res: Response, next: NextFunction) => void;
    postCategory: (req: Request, res: Response, next: NextFunction) => void;
};

export const getCategory:Functions["getCategory"] =async(req:Request,res:Response,next:NextFunction)=>{
    try{

      const data =await getCategoryService();
        return res.status(200).json(
            {
                message:"Successfully Retrieved Category Data!",
                data:data
            }
        )
    }
    catch(err:any){
        next(new AppError(err.statusCode,err.message))
    }
}

export const postCategory:Functions["postCategory"] = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await postCategoryService(req.body).then((data:any)=>{
            res.status(201).json({
                message:'Category Created Successfully!',
                data:data
            })
        }) 
    }
    catch(error:any){
        next(new AppError(error.statusCode,error.message))
    }
}