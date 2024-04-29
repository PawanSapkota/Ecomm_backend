"use strict";
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
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, database_1.getDatabaseConnection)(); //Database configuration
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerUI_1.swaggerOptions); //swagger documentation
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.get("/", (req, res) => {
    res.status(200).json({
        message: 'working'
    });
});
app.listen(index_1.PORT, () => {
    console.log(`Server is running on ${index_1.PORT}`);
});
exports.default = app;
