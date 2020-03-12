import { get } from "./Football";
describe("get by championship", () => {
  test("get", () => {
    const stub = jest.fn(get);
    stub();
    expect(stub).toHaveBeenCalled();
  });
});
