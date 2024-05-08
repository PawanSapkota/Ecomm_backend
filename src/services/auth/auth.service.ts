
import { userRegistration } from "../../models/userInfoDetails";

export const userRegisterService =async(data:any)=>{
    try{
        const result = await userRegistration(data)
        return result
    }
    catch(error:any){
        throw new Error(error)
    }

}