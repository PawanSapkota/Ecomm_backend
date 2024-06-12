import {Request,Response, NextFunction } from "express";
import AppError from "../../utils/AppError";
import { saveProductInfo } from "../../models/productInfoDetails";

export const saveProduct = async(req:Request,res:Response,next:NextFunction)=>{
    try{
     await saveProductInfo(req.body)
      return  res.status(201).json({
            status:"success",            
            message:"Data saved successfully."
        })
    }
    catch(err:any){
        next(new AppError(err.status,err.message))
    }
}