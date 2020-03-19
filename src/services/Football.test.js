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
  test("get('cup') must call CupGetterSpy only", () => {});
  test("get('league') must return an object with matches and teams", () => {});
  test("get('cup') must return an object with matches and teams", () => {});
  test("get('league') returned value must have array on each key", () => {});
  test("get('cup') returned value must have array on each key", () => {});
  test("get('league') must return matches and teams as empty arrays if LeagueGetterSpy returns two empty arrays", () => {});
  test("get('cup') matches and values should return empty arrays if CupGetterSpy returns two empty arrays", () => {});
  test("get('league') every team must have an id that is an number", () => {});
  test("get('cup') every team must have an id that is an number", () => {});
  test("get('') should throw an error", () => {
    expect(() => get(""));
  });
  test("get('league') should call LeagueGetterSpy without args", () => {});
  test("get('cup') should call CupGetterSpy without args", () => {});
  test("get('league') should call LeagueGetterSpy only once", () => {});
  test("get('cup') should call CupGetterSpy only once", () => {});
});

/*
https://jestjs.io/docs/en/mock-function-api
mockResolvedValue(responseValue);

https://jestjs.io/docs/en/expect
toHaveBeenCalledTimes(numberOfTimes);
toHaveBeenCalledWith(params);
toHaveProperty(propertyName);
toBe(value);
toThrow(TypeError);
toBeTruthy();
*/
