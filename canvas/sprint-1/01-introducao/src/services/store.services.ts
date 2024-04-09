import { prisma } from "../database/prisma";

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
  async findMany(search?: string) {
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
    });
  }
}
