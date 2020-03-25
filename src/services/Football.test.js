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
  test("get('league') must return an object with matches and teams", () => {
    return get("league").then(response => {
      expect(response).toHaveProperty("matches");
      expect(response).toHaveProperty("teams");
    });
  });
  test("get('cup') must return an object with matches and teams", () => {
    return get("cup").then(response => {
      expect(response).toHaveProperty("matches");
      expect(response).toHaveProperty("teams");
    });
  });
  test("get('league') returned value must have array on each key", () => {
    return get("league").then(response => {
      expect(Array.isArray(response.matches)).toBeTruthy();
      expect(Array.isArray(response.teams)).toBeTruthy();
    });
  });
  test("get('cup') returned value must have array on each key", () => {
    return get("cup").then(response => {
      expect(Array.isArray(response.matches)).toBeTruthy();
      expect(Array.isArray(response.teams)).toBeTruthy();
    });
  });
  test("get('league') must return matches and teams as empty arrays if LeagueGetterSpy returns two empty arrays", () => {
    LeagueGetterSpy.mockResolvedValue([[], []]);
    return get("league").then(response => {
      expect(response.matches.length).toBe(0);
      expect(response.teams.length).toBe(0);
    });
  });
  test("get('cup') matches and values should return empty arrays if CupGetterSpy returns two empty arrays", () => {
    CupGetterSpy.mockResolvedValue([[], []]);
    return get("cup").then(response => {
      expect(response.matches.length).toBe(0);
      expect(response.teams.length).toBe(0);
    });
  });
  test("get('league') every team must have an id that is an number", () => {
    return get("league").then(response => {
      response.teams.map(item => {
        expect(item)
          .toHaveProperty("id")
          .toBe()
          .number();
      });
    });
  });
  test("get('cup') every team must have an id that is an number", () => {
    return get("cup").then(response => {
      response.teams.map(team => {
        expect(team)
          .toHaveProperty("id")
          .toBe(Number);
      });
    });
  });
  test("get('') should throw an error", () => {
    expect(() => get("")).toThrow(Error);
  });
  test("get('league') should call LeagueGetterSpy without args", () => {});
  test("get('cup') should call CupGetterSpy without args", () => {
    return get("cup").then(() => {
      expect(CupGetterSpy).toHaveBeenCalledWith();
    });
  });
  test("get('league') should call LeagueGetterSpy only once", () => {
    return get("league").then(() => {
      expect(LeagueGetterSpy).toHaveBeenCalledTimes(1);
    });
  });
  test("get('cup') should call CupGetterSpy only once", () => {
    return get("cup").then(() => {
      expect(CupGetterSpy).toHaveBeenCalledTimes(1);
    });
  });
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
