 import  express,{Application,Request,Response} from "express";
 import {PORT} from "./config/index";
 import {getDatabaseConnection} from "./config/database"
import { swaggerOptions } from "./config/swaggerUI";
import  swaggerJsDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

const app:Application = express();
app.use(express.json());

getDatabaseConnection()  //Database configuration

const swaggerDocs = swaggerJsDoc(swaggerOptions)  //swagger documentation
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))


app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
      
      message:'working'
    })
})

 app.listen(PORT , ()=>{
   console.log(`Server is running on ${PORT}`)
})

export default app;



