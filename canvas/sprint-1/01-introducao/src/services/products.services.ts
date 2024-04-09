import { prisma } from "../database/prisma";
import { TCreateProductBody } from "../interfaces/products.interface";

export class ProductServices{
    async create(body: TCreateProductBody){
        return await prisma.product.create({ data: body });
    }
}