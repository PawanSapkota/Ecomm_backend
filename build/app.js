"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./config/index");
const database_1 = require("./config/database");
const swaggerUI_1 = require("./config/swaggerUI");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const bodyParser = __importStar(require("body-parser"));
const AppError_1 = __importDefault(require("./utils/AppError"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use((0, cookie_parser_1.default)());
app.use('/public', express_1.default.static('/src/public'));
(0, database_1.getDatabaseConnection)(); //Database configuration
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerUI_1.swaggerOptions); //swagger documentation
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.get("/", (req, res) => {
    // console.log(req.cookies)
    res.status(200).json({
        message: 'working'
    });
});
app.use("/api", category_routes_1.default);
app.use("/api", auth_routes_1.default);
app.use("/api", role_routes_1.default);
// unhandled routes
app.all("*", (req, res, next) => {
    next(new AppError_1.default(404, `Route ${req.originalUrl} not found`));
});
// GLOBAL ERROR HANDLER
app.use((error, req, res, next) => {
    error.status = error.status || "error";
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
    });
});
app.listen(index_1.PORT, () => {
    console.log(`Server is running on ${index_1.PORT}`);
});
exports.default = app;
