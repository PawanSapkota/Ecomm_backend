import { NextFunction, Request, Response } from "express";
import { userRegisterService } from "../../services/auth/auth.service";


export const register =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        await userRegisterService(req.body).then((register)=>{
            res.status(201).json({
                message:"User Registered Succesfully!!",
                data:register
            })
        })

    }
    catch(error){
        next(error)
    }
}