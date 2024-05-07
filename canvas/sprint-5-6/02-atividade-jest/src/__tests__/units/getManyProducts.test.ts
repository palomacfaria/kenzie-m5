import { productDatabase, resetDatabase } from "../../database/database";
import { ProductServices } from "../../services/product.services";
import { productMock } from "../__mocks__/product.mock";

describe("Unit test: get many products", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("get many products should work correctly", () => {
    productDatabase.push(productMock);

    const productServices = new ProductServices();

    const data = productServices.getMany();

    expect(data).toHaveLength(1);
    expect(data[0]).toStrictEqual(productMock);
  });
});
