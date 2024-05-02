import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import { HandleErrors } from "./middlewares/handleErrors.middleware";
import { userRouter } from "./routes/userRoutes";
import express, { json } from "express";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());
app.use("/users", userRouter);

app.use(HandleErrors.execute);