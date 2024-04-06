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
}
