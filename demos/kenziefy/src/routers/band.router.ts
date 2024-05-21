import { Router } from "express";
import { BandController } from "../controllers";

export const bandRouter = Router();
const bandController = new BandController;

bandRouter.get("", bandController.list);
bandRouter.post("", bandController.create);