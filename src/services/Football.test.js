import { get } from "./Football";
import * as BrazilianLeague from "./BrazilianLeague";
import * as BrazilianCup from "./BrazilianCup";

describe("get by championship", () => {
  test("get from Brazilian League must be called", () => {
    const LeagueGetterSpy = jest.spyOn(BrazilianLeague, "get");
    return get("league").then(response => {
      expect(LeagueGetterSpy).toHaveBeenCalled();
    });
  });
  test("get from Brazilian League must be called", () => {
    const CupGetterSpy = jest.spyOn(BrazilianCup, "get");
    return get("cup").then(response => {
      expect(CupGetterSpy).toHaveBeenCalled();
    });
  });
});
