import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";
import { userRouter } from "./routes/user.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());

app.use("/users", userRouter);

app.use(HandleErrors.execute);