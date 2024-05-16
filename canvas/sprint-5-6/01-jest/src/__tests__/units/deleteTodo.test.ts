import { TodoServices } from "../../services/todo.services";
import { todoMock } from "../__mocks__/todo.mocks";

describe("Unit test: delete todo", () => {
    test("delete todo should work correctly", async () => {
        const todoServices = new TodoServices();

        await todoServices.delete(todoMock.id);
    })
});