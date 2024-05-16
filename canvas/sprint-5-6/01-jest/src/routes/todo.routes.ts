import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";
import { IsTodoIdValid } from "../middlewares/isTodoIdValid.middleware";

export const todoRouter = Router();

const todoControllers = new TodoControllers();

todoRouter.get("/", todoControllers.getMany);
todoRouter.post("/", todoControllers.create);
todoRouter.patch("/:id", IsTodoIdValid.execute, todoControllers.update);
todoRouter.delete("/:id", IsTodoIdValid.execute, todoControllers.delete);