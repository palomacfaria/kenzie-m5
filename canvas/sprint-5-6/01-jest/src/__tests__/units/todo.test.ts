import { todoCreateBodyMock, todoMock } from "../__mocks__/todo.mocks";
import { resetDatabase, todoDatabase } from "../../database/database";
import { TodoServices } from "../../services/todo.services";

describe("Unit test: todo services", () => {
   // beforeEach, beforeAll, afterEach, afterAll

   beforeEach(() => {
        resetDatabase();
   });

   test("create todo should work correctly", () => {
      const todoServices = new TodoServices();

      const data = todoServices.create(todoCreateBodyMock);

      expect(data).toStrictEqual(todoMock);
   });

   test("get many todos should work correctly", () => {
      todoDatabase.push(todoMock);

      const todoServices = new TodoServices();

      const data = todoServices.getMany();

      expect(data).toHaveLength(1);

      expect(data[0]).toStrictEqual(todoMock);
   });
});