import {  Router } from "express";
import { getCategory, postCategory } from "../controller/category/category.controller";
import { postCategoryValidation } from "../middlewares/category/categoryValidation";

const router = Router();

router.route("/getcategory").get(getCategory )


router.route("/postcategory").post(postCategoryValidation, postCategory )

export default router;