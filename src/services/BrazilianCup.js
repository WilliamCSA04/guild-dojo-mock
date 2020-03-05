import { Api, Routes } from "./client";

export async function get() {
  const {
    brazilianCup: { teams, matches }
  } = Routes;
  return Api.all([Api.get(teams), Api.get(matches)]);
}
