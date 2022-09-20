"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const server = require("./src/app.ts");
const app_1 = __importDefault(require("./src/app"));
app_1.default.listen(process.env.PORT || 3001, () => console.log("listen at port 3001"));
