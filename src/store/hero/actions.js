import * as types from "./types";
import { get } from "../../shared/api-call";

export function getHeroesAction({ commit }) {
  commit(types.ISLOADING_HERO, true);

  return get("heroes")
    .then(({ data }) => commit(types.GET_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.ISLOADING_HERO, false));
}
