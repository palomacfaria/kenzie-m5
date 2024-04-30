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
    return await prisma.product.updateMany({
      where: { storeId: storeId },
      data,
    });
  }

  //Delete Individual
  async deleteOne(productId: number) {
    return await prisma.product.delete({ where: { id: productId } });
  }

  //Delete Multiplo
  async deleteMany(id: number) {
    return await prisma.product.deleteMany({where: {id}});
  }
}
