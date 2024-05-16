import { TodoServices } from "../../services/todo.services";
import { prismaMock } from "../__mocks__/prisma";
import { todoCreateBodyMock, todoMock } from "../__mocks__/todo.mocks";

describe("Unit test: create todo", () => {
   test("create todo should work correctly", async () => {
      const todoServices = new TodoServices();

      prismaMock.todo.create.mockResolvedValue(todoMock);
      const data = await todoServices.create(todoCreateBodyMock);

      expect(data).toStrictEqual(todoMock);
   });
});
