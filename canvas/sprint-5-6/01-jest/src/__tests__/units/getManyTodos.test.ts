import { TodoServices } from "../../services/todo.services";
import { prismaMock } from "../__mocks__/prisma";
import { todoListMock } from "../__mocks__/todo.mocks";

describe("Unit test: get many todos", () => {
   test("get many todos should work correctly", async () => {
      const todoServices = new TodoServices();

      prismaMock.todo.findMany.mockResolvedValue(todoListMock);

      const data = await todoServices.getMany();

      expect(data).toHaveLength(2);
      expect(data[0]).toStrictEqual(todoListMock[0]);
      expect(data[1]).toStrictEqual(todoListMock[1]);
   });
});
