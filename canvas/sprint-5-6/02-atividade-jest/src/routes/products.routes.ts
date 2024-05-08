import { Router } from "express";
import { ProductControllers } from "../controllers/product.controllers";

export const productRouter = Router();

const productControllers = new ProductControllers();

productRouter.post("/", productControllers.create);
productRouter.get("/", productControllers.getMany);