import {  Router } from "express";
import { login, logout, register } from "../controller/auth/auth.controller";
import { userRegistrationValidation } from "../middlewares/auth/authValidation";
import { auth } from "../middlewares/auth/auth";

const router = Router();

router.route("/register").post(userRegistrationValidation,register)

router.route("/login").post(login)

router.route("/logout").post(auth,logout)


export default router