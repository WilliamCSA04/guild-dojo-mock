import { get } from "./Football";
import * as BrazilianLeague from "./BrazilianLeague";

describe("get by championship", () => {
  test("get from Brazilian League must be called", () => {
    const stub = jest.fn(get);
    const LeagueGetterStub = jest.spyOn(BrazilianLeague, "get");
    return stub("league").then(response => {
      expect(LeagueGetterStub).toHaveBeenCalled();
    });
  });
});
