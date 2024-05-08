import { resetDatabase } from "../../database/database";
import { todoCreateBodyMock, todoMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";

describe("Integration test: create todo", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("should be able to create todo successfully", async () => {
    const data = await request
      .post("/todos")
      .send(todoCreateBodyMock)
      .expect(201)
      .then((response) => response.body);

    expect(data).toStrictEqual(todoMock);
  });
});
