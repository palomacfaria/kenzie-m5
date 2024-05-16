import { prisma } from "../../database/prisma";
import { invalidTodoId, todoCreateBodyMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";

describe("Integration test: delete todo", () => {
   test("should be able to delete a todo successfully", async () => {
      const todo = await prisma.todo.create({ data: todoCreateBodyMock });

      await request.delete(`/todos/${todo.id}`).expect(204);
   });

   test("should throw error when todo is invalid", async () => {
      await request.delete(`/todos/${invalidTodoId}`).expect(404);
   });
});
