import { ProductServices } from "./services/products.services";
import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

const productSercives = new ProductServices();

async function exampleController() {
  //CRIAÇÃO INDIVIDUAL
  /* const response = await storeServices.createMany(["Otávio Store", "Oswaldo Store"]); */

  //CRIAÇÃO MULTIPLA
  /*const response = await productSercives.create({
    name: "Computador",
    price: 2500,
    description: "Computador bonito",
    storeId: 1,
  }); */

  //LEITURA INDIVIDUAL
  const response = await storeServices.findOne(1);

  //LEITURA MULTIPLA
  /* const response = await storeServices.findMany("oswaldo"); */

  console.log(response);
}

exampleController();
