import {Router} from "express"
import { saveProduct } from "../controller/product/product.controller";
import { auth } from "../middlewares/auth/auth";
import { saveProductValidation } from "../middlewares/product/productValdation";

const router = Router();

router.route("/saveproductdetails").post(auth,saveProductValidation,saveProduct)


export default router;