import { resetDatabase } from "../../database/database";
import { ProductServices } from "../../services/product.services";
import { productCreateBodyMock, productMock } from "../__mocks__/product.mock";

describe("Unit test: create product", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("create product works correctly", () => {
    const productServices = new ProductServices();

    const data = productServices.create(productCreateBodyMock);

    expect(data).toStrictEqual(productMock);
  });
});
