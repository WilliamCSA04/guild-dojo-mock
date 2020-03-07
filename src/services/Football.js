import { get as CupGetter } from './BrazilianCup.js'
import { get as LeagueGetter } from './BrazilianLeague.js'

function get(championship) {
  const lowerCased = championship.toLowerCase();
  if(lowerCased === 'league') {
    return LeagueGetter();
  }
  if(lowerCased === 'cup') {
    return CupGetter();
  }
}