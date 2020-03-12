import { get as CupGetter } from "./BrazilianCup.js";
import { get as LeagueGetter } from "./BrazilianLeague.js";

function get(championship) {
  const lowerCased = championship.toLowerCase();
  if (lowerCased === "league") {
    return LeagueGetter().then(response => {
      const [teams, matches] = response;
      return { teams, matches };
    });
  }
  if (lowerCased === "cup") {
    return CupGetter().then(response => {
      const [teams, matches] = response;
      return { teams, matches };
    });
  }
}

export { get };
