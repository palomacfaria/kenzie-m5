import { Request, Response } from "express";
import { IProduct } from "../interfaces/products.interfaces";
import { ProductServices } from "../services/product.services";

export class ProductControllers {
  create(req: Request, res: Response): Response<IProduct> {
    const productsServices = new ProductServices();

    const response = productsServices.create(req.body);

    return res.status(201).json(response);
  }
  getMany(req: Request, res: Response): Response<IProduct[]> {
    const productsServices = new ProductServices();

    const response = productsServices.getMany();

    return res.status(200).json(response);
  }
}
