"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const index_1 = require("./src/config/index");
app_1.default.listen(index_1.PORT, () => {
    console.log(`Server is running on ${index_1.PORT}`);
});
