import * as jwt from "jsonwebtoken"

export const sign=(payload:any,secret:any,expire:any)=>{
    return jwt.sign(payload,secret, { expiresIn: expire })

}

export const verify =(token:any,secret:any)=>{
    return jwt.sign(token,secret)
}

export const decode =(token:any)=>{
    return jwt.decode(token)
}