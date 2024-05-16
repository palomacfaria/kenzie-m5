import "dotenv/config";
import express, { json } from "express";
import { todoRouter } from "./routes/todo.routes";

export const app = express();

app.use(json());

app.use("/todos", todoRouter);