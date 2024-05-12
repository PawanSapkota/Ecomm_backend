import { NextFunction, Request, Response } from "express";
import {  userRegistrationService } from "../../services/auth/auth.service";
import { findByEmail } from "../../models/userInfoDetails";
import AppError from "../../utils/AppError";
import * as bcrypt from "bcryptjs"
import { sign } from "../../services/auth/jwt.services";
import {  JWT_EXPIRY, JWT_SECRET } from "../../config";



export const register =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password,full_name,photo} = req.body;
        const existingEmail = await findByEmail(email)            

        if (existingEmail){
            return next(new AppError(400, "Email has been already used.")); 
        }     

        const hashedPassword = await bcrypt.hash(password,10)  
        
        const photoPath =photo ? photo:"default.png"

        const userData ={
            email:email,
            password:hashedPassword,
            full_name:full_name,
            photo:photoPath,
        }        
        await userRegistrationService(userData).then((data)=>{
           res.status(201).json({
               message:"User Registered Succesfully!!",
               data:data
           })
       })
    }
    catch(error:any){
        next(new AppError(error.status, error.message));
    }
}

export const login = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password}=req.body;

        const user = await findByEmail(email)
        if(!user){
            return next(new AppError(404,"User not registered."))
        }

       if(user.length === 0 || !(await bcrypt.compare(password,user.password))){
        return next(new AppError(401,"Please Check Your Email or Password."));
       }

       const payload ={
        email:email,
        password:password
       }
       const access_token = sign(payload,JWT_SECRET,JWT_EXPIRY)
       const refresh_token = sign(payload,JWT_SECRET,JWT_EXPIRY)


       res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        secure: false,
        maxAge: 36000000,
    })

    res.cookie('access_token', access_token, {
        httpOnly: false,
        secure: false,
        maxAge: 72000000,
    })

    res.status(200).json({
        email,
        status:true,
        message:"Login Successfully"
    })

    }
    catch(error){
        next(new AppError(500, "Something went Wrong"));
    }
}

export const logout = async(req:Request,res:Response,next:NextFunction)=>{
    try{       

        res.clearCookie("refresh_token");
        res.clearCookie("access_token"); 

        res.send("Logout Successfull")
       }
    catch(error:any){
        next(new AppError(error.status,error.message))
    }
}