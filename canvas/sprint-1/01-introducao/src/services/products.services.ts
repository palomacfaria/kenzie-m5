import { prisma } from "../database/prisma";
import { TCreateProductBody } from "../interfaces/products.interface";
import { TUpdateProductBody } from "../interfaces/store.interface";

export class ProductServices {
  //Criação individual
  async create(body: TCreateProductBody) {
    return await prisma.product.create({ data: body });
  }

  //Update Multiplo
  async updateMany(storeId: number, data: TUpdateProductBody) {
    return await prisma.product.updateMany({where:{storeId: storeId},  data });
  }
}
