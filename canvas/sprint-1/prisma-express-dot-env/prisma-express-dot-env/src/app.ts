import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routes/opportunity.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

console.log(process.env.EXAMPLE);

app.use(helmet());

app.use(json());

app.use("/opportunities", opportunityRouter);

app.use(HandleErrors.execute);
