import { prisma } from "../database/prisma";
import { TUpdateStoreBody } from "../interfaces/store.interface";

export class StoreServices {
  //Criação individual
  async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }

  //Criação multipla
  async createMany(storeNames: string[]) {
    const stores = storeNames.map((storeName) => ({ name: storeName }));

    return await prisma.store.createMany({ data: stores });
  }

  //Leitura individual
  async findOne(storeId: number) {
    return await prisma.store.findFirst({
      where: { id: storeId },
      include: { products: true },
    });
  }

  //Leitura Multipla
  async findMany(search?: string, take = 10, skip = 0) {
    if (!search) {
      return await prisma.store.findMany(); // Retorna todos se o search for undefined
    }

    return await prisma.store.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      take, //Define a quantidade de itens por página
      skip: skip * take,
    });
  }
  //Update Individual
  async updateOne(storeId: number, data: TUpdateStoreBody) {
    return await prisma.store.update({ where: { id: storeId }, data });
  }
}
