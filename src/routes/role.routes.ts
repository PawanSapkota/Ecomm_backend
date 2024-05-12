import  {Router} from "express"
import { role } from "../controller/role/role.controller";

const router =Router();

router.route("/changerole").post(role)

export default router;