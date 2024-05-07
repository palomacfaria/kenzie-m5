import { clearToken } from "..";

describe("Unit test: clear token", () => {
  test("clear token should work correctly", () => {
    const token = clearToken("Bearer 1234");

    expect(token).toBe("1234");
  });
});
