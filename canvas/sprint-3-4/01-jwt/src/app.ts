import "dotenv/config";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { HandleError } from "./middlewares/handleError.middleware";
import { userRouter } from "./router/user.router";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/users", userRouter);

app.use(HandleError.execute);
