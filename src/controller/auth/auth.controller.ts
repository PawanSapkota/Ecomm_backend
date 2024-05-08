import { NextFunction, Request, Response } from "express";
import {  userRegistrationService } from "../../services/auth/auth.service";
import { findByEmail } from "../../models/userInfoDetails";
import AppError from "../../utils/AppError";
import * as bcrypt from "bcryptjs"

export const register =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password} = req.body;
        const existingEmail = await findByEmail(email)            

        if (existingEmail){
            return next(new AppError(400, "Email has been already used.")); 
        }     

        const hashedPassword = await bcrypt.hash(password,10)        

        const userData ={
            email:email,
            password:hashedPassword
        }        
        await userRegistrationService(userData).then((data)=>{
           res.status(201).json({
               message:"User Registered Succesfully!!",
               data:data
           })
       })
    }
    catch(error){
        next(error)
    }
}