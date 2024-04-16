import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routes/opportunity.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/opportunities", opportunityRouter);
