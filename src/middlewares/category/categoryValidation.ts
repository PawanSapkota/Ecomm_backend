import { Request, Response ,NextFunction} from "express";
import * as joi from "joi"

type category={
    category_name:string;
}
 const postCategoryValidationSchema:joi.ObjectSchema<category>=joi.object({
    category_name:joi.string().required()
})

export const postCategoryValidation =async(req:Request,res:Response,next:NextFunction)=>{
    const { error } = postCategoryValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}