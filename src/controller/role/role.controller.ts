import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/AppError";
import { changeRole } from "../../models/userInfoDetails";


export const role =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {role_id,user_id} = req.body;

        if(!role_id){
            return next(new AppError(404, "Please send the role_id")); 
        }

        await changeRole(req.body).then(()=>{
            res.status(200).json({
                status:true,
                message:"Role Changed!!",
                
            })
        })
    }
    catch(error:any){
        next(new AppError(error.statusCode,error.message))
    }

}