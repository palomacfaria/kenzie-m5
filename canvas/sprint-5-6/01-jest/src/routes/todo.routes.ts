import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";

export const todoRouter = Router();

const todoControllers = new TodoControllers();

todoRouter.get("/", todoControllers.getMany);
todoRouter.post("/", todoControllers.create);