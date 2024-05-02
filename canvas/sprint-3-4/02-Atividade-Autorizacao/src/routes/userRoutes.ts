import { CreateUserSchema, LoginUserSchema } from './../schemas/user.schemas';
import { Router } from "express";
import { container } from "tsyringe";
import { userServices } from "../services/userServices";
import { UserControllers } from "../controllers/userControllers";
import { auth } from "../middlewares/AuthMiddleware";
import { ValidateRequest} from "../middlewares/validadeRequestMiddleware";
import { isUserIdParams } from '../middlewares/isUserIdParams.Middleware';
import { isUserEmailExisting } from '../middlewares/isUserEmailExisting.middleware';


export const userRouter = Router();

container.registerSingleton("userServices", userServices);
const userControllers = container.resolve(UserControllers);

userRouter.get("/", (req, res)=> userControllers.get(req, res));

userRouter.get("/:userId", auth.isAuthenticated, auth.isRecourceOwner, (req, res)=> userControllers.getOneUser(req, res));

userRouter.post("/",
ValidateRequest.execute({body: CreateUserSchema}),
isUserEmailExisting.emailExists,
(req, res)=> userControllers.register(req, res));

userRouter.post("/login",
(req, res)=> userControllers.login(req, res));

userRouter.delete("/:id", isUserIdParams.idExists, userControllers.deleteUser);