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
  test("get('league') must call LeagueGetterSpy only", () => {
    return get("league").then(response => {
      expect(LeagueGetterSpy).toHaveBeenCalled();
      expect(CupGetterSpy).not.toHaveBeenCalled();
    });
  });
  test("get('cup') must call CupGetterSpy only", () => {
    return get("cup").then(response => {
      expect(CupGetterSpy).toHaveBeenCalled();
      expect(LeagueGetterSpy).not.toHaveBeenCalled();
    });
  });
  test("get('league') must return an object with matches and games", () => {
    return get("league").then(response => {
      expect(response).toHaveProperty("teams");
      expect(response).toHaveProperty("matches");
    });
  });
  test("get('cup') must return an object with matches and games", () => {
    return get("cup").then(response => {
      expect(response).toHaveProperty("teams");
      expect(response).toHaveProperty("matches");
    });
  });
  test("get('league') returned value must have array on each key", () => {
    LeagueGetterSpy.mockResolvedValue([[], []]);
    return get("league").then(response => {
      expect(Array.isArray(response.teams)).toBeTruthy();
      expect(Array.isArray(response.matches)).toBeTruthy();
    });
  });
  test("get('cup') returned value must have array on each key", () => {
    CupGetterSpy.mockResolvedValue([[], []]);
    return get("cup").then(response => {
      expect(Array.isArray(response.teams)).toBeTruthy();
      expect(Array.isArray(response.matches)).toBeTruthy();
    });
  });
});
