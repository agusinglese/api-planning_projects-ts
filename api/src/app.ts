import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler";
const routes = require("./routes/index");

const app = express();
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/", routes);
// Error catching endware.
app.use(errorHandler);

export default app;
