import { todoCreateBodyMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";
import { todoDefaultExpects } from "../utils/todoDefaultExpects";

describe("Integration test: create todo", () => {  
   test("should be able to create a todo successfully", async () => {
      const data = await request
         .post("/todos")
         .send(todoCreateBodyMock)
         .expect(201)
         .then((response) => response.body);

       todoDefaultExpects(data, todoCreateBodyMock);  
   });
});
