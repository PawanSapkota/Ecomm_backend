 import  express,{Application,NextFunction,Request,Response} from "express";
 import {PORT} from "./config/index";
 import {getDatabaseConnection} from "./config/database"
import { swaggerOptions } from "./config/swaggerUI";
import  swaggerJsDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import CategoryRoutes from "./routes/category.routes"
import ProductRoutes from "./routes/product.routes"
import AuthRoutes from "./routes/auth.routes"
import ChangRoleRoutes from "./routes/role.routes"
import * as bodyParser from "body-parser";
import AppError from "./utils/AppError";
import  cookieParser from 'cookie-parser';

const app:Application = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/public',express.static('./src/public'));

getDatabaseConnection()  //Database configuration

const swaggerDocs = swaggerJsDoc(swaggerOptions)  //swagger documentation
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))


app.get("/",(req:Request,res:Response)=>{
  // console.log(req.cookies)
    res.status(200).json({
      message:'working'
    })
})

app.use("/api",CategoryRoutes);
app.use("/api",AuthRoutes);
app.use("/api",ChangRoleRoutes);
app.use("/api",ProductRoutes)


  // unhandled routes
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, `Route ${req.originalUrl} not found`));
  });

  // GLOBAL ERROR HANDLER
  app.use(
    (error: AppError, req: Request, res: Response, next: NextFunction) => {
      error.status = error.status || "error";
      error.statusCode = error.statusCode || 500;

      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    }
  );

 app.listen(PORT , ()=>{
   console.log(`Server is running on ${PORT}`)
})

export default app;



