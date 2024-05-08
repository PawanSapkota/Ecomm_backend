import { Request, Response ,NextFunction} from "express";
import * as joi from "joi"

type auth ={
    email:string;
    password:string
}

type Functions ={
    userRegisterValidation:(req: Request, res: Response, next: NextFunction) => void;
}

 const userRegisterValidationSchema:joi.ObjectSchema<auth>=joi.object({
    email : joi.string().required(),
    password: joi.string().required()
})

export const userRegistrationValidation:Functions['userRegisterValidation']=async(req:Request,res:Response,next:NextFunction)=>{
    const { error } = userRegisterValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}