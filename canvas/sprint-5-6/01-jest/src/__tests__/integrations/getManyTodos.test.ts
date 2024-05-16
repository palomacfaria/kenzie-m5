import { prisma } from "../../database/prisma";
import { todoCreateBodyListMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";
import { todoDefaultExpects } from "../utils/todoDefaultExpects";

describe("Integration test: get many todos", () => {
   test("should be able to get many todos successfully", async () => {
      await prisma.todo.createMany({ data: todoCreateBodyListMock });

      const data = await request
         .get("/todos")
         .expect(200)
         .then((response) => response.body);

      expect(data).toHaveLength(2);   

      todoDefaultExpects(data[0], todoCreateBodyListMock[0]);
      todoDefaultExpects(data[1], todoCreateBodyListMock[1]);
   });
});
