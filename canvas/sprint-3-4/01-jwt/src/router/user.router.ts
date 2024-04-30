import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { VerifyToken } from "../middlewares/verifyToken.middleware";

export const userRouter = Router();

const userControllers = new UserControllers();

userRouter.post("/login", userControllers.login);
userRouter.post("/", userControllers.register);
userRouter.get("/", VerifyToken.execute, userControllers.getUser);
