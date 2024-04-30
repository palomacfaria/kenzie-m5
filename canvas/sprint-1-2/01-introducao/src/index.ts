import { ProductServices } from "./services/products.services";
import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

const productSercives = new ProductServices();

async function exampleController() {
  //?CRIAÇÃO INDIVIDUAL
  /* const response = await storeServices.createMany(["Otávio Store", "Oswaldo Store"]); */
  //?CRIAÇÃO MULTIPLA
  /*const response = await productSercives.create({
    name: "Computador",
    price: 2500,
    description: "Computador bonito",
    storeId: 1,
  }); */
  //?LEITURA INDIVIDUAL
  /*   const response = await storeServices.findOne(1); */
  //?LEITURA MULTIPLA
  /*   const response = await storeServices.findMany('a', 5, 1);

  console.log(response); */
  //?ATUALIZAÇÃO INDIVIDUAL
  /*   const response = await storeServices.updateOne(2, { name: "New Alex Store" });

  console.log(response); */
  //?ATUALIZAÇÃO MULTIPLA
  /*   const response = await productSercives.updateMany(1, { price: 4000 });

  console.log(response); */

  //?DELETE INDIVIDUAL
  /*   const response = await productSercives.deleteOne(2);

  console.log(response); */

  //?DELETE MULTIPLO
  const response = await productSercives.deleteMany(1);

  console.log(response);
}

exampleController();
