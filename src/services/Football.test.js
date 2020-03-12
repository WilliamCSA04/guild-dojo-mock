import { get } from "./Football";
import * as BrazilianLeague from "./BrazilianLeague";
import * as BrazilianCup from "./BrazilianCup";

describe("get by championship", () => {
  let LeagueGetterSpy = null;
  let CupGetterSpy = null;
  beforeEach(() => {
    LeagueGetterSpy = jest.spyOn(BrazilianLeague, "get");
    CupGetterSpy = jest.spyOn(BrazilianCup, "get");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("get from Brazilian League must be called", () => {
    return get("league").then(response => {
      expect(LeagueGetterSpy).toHaveBeenCalled();
    });
  });
  test("get from Brazilian League must be called", () => {
    return get("cup").then(response => {
      expect(CupGetterSpy).toHaveBeenCalled();
    });
  });
});
