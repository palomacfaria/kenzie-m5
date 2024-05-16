import { TodoServices } from "../../services/todo.services"
import { prismaMock } from "../__mocks__/prisma";
import { todoMock, todoUpdateBodyMock } from "../__mocks__/todo.mocks";

describe("Unit test: update todo", () => {
    test("update todo should work correctly", async () => {
        const todoServices = new TodoServices();

        const updateTodo = { ...todoMock, ...todoUpdateBodyMock};

        prismaMock.todo.update.mockResolvedValue(updateTodo);
        const data = await todoServices.update(todoUpdateBodyMock, todoMock.id);

        expect(data).toStrictEqual(updateTodo);
    })
})