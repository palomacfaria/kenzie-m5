import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { VerifyToken } from "../middlewares/verifyToken.middleware";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";

export const userRouter = Router();

container.registerSingleton("UserControllers", UserServices);
const userControllers = container.resolve(UserControllers);

userRouter.post("/login", (req, res) => userControllers.login(req, res));
userRouter.post("/", (req,res) => userControllers.register(req, res));
userRouter.get("/", VerifyToken.execute, (req,res) => userControllers.getUser(req, res));