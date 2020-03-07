import { Api, Routes } from "../client";

export async function get() {
  console.log(Api)
  const {
    brazilianCup: { teams, matches }
  } = Routes;
  return Promise.all([Api.get(teams), Api.get(matches)]);
}
