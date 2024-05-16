import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { VerifyToken } from "../middlewares/verifyToken.middleware";

container.registerSingleton("UserServices", UserServices);
const userControllers = container.resolve(UserControllers);

export const userRouter = Router();

userRouter.post("/", ValidateBody.execute(userRegisterBodySchema), (req, res) =>
   userControllers.register(req, res)
);

userRouter.post("/login", ValidateBody.execute(userLoginBodySchema), (req, res) =>
   userControllers.login(req, res)
);

userRouter.get("/", VerifyToken.execute, (req, res) => userControllers.getUser(req, res));
