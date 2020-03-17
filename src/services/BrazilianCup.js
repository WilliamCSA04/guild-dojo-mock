import { Api, Routes } from "../client";

export async function get() {
  const {
    brazilianCup: { teams, matches }
  } = Routes;
  return Promise.all([
    Api.get(teams).then(resp => resp.data.data),
    Api.get(matches).then(resp => resp.data.data)
  ]);
}
