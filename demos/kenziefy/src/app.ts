import express from "express";
import { bandRouter } from "./routers/band.router";

const app = express();

app.use(express.json());

app.use("/api/bands", bandRouter);

export default app;
