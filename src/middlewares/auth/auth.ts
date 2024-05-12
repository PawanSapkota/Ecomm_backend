import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/AppError";
import { verify } from "../../services/auth/jwt.services";
import { JWT_SECRET } from "../../config";

interface RequestCustom extends Request{
    user?:any;
}
type Functions ={
    auth:(req:RequestCustom,res:Response,next:NextFunction) => void;
}



export const auth:Functions["auth"] = async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        const access_token = req.cookies.access_token;

        if(!access_token){
            return next(new AppError(400,"Access token is not available.."))
        }

    const user = verify(access_token,JWT_SECRET)
    req.user =user;
    next()

    }
    catch(error:any){
        next(new AppError(error.status,error.message))
    }
}