import { prisma } from "../../database/prisma";
import {
   invalidTodoId,
   todoCreateBodyMock,
   todoUpdateBodyMock,
} from "../__mocks__/todo.mocks";
import { request } from "../utils/request";

describe("Integration test: update todo", () => {
   test("should be able to update a todo succesfully", async () => {
      const todo = await prisma.todo.create({ data: todoCreateBodyMock });

      const data = await request
         .patch(`/todos/${todo.id}`)
         .send(todoUpdateBodyMock)
         .expect(200)
         .then((response) => response.body);

      const updateTodo = { ...todo, ...todoUpdateBodyMock };

      expect(data).toStrictEqual(updateTodo);
   });

   test("should throw error when todo is invalid", async () => {
      await request.patch(`/todos/${invalidTodoId}`).expect(404);
   });
});
