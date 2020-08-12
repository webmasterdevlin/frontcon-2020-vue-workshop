import * as types from "./types";
import { get } from "../../shared/api-call";

export function getHeroesAction({ commit }) {
  commit(types.ISLOADING_HERO, true);

  return get("heroes")
    .then(({ data }) => commit(types.GET_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.ISLOADING_HERO, false));
}

export function removeHeroAction({ commit }, payload) {
  commit(types.ISLOADING_HERO, true);

  return deleteById("heroes", payload)
    .then(() => commit(types.REMOVE_HERO, payload))
    .catch((e) => {
      console.log(e.message);
    })
    .finally(() => commit(types.ISLOADING_HERO, false));
}
