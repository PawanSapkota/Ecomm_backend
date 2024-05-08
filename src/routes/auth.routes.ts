import {  Router } from "express";
import { register } from "../controller/auth/auth.controller";
import { userRegistrationValidation } from "../middlewares/auth/authValidation";

const router = Router()

router.route("/register").post(userRegistrationValidation,register)


export default router