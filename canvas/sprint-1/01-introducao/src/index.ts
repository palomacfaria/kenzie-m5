import { ProductServices } from "./services/products.services";
import { StoreServices } from "./services/store.services";

const storeServices = new StoreServices();

const productSercives = new ProductServices();

async function exampleController() {
  /* const response = await storeServices.createMany(["Otávio Store", "Oswaldo Store"]); */

  const response = await productSercives.create({
    name: "Computador",
    price: 2500,
    description: "Computador bonito",
    storeId: 1,
  });

  console.log(response);
}

exampleController();
