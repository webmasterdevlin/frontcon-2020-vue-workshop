import * as types from "./types";
import { get, deleteById, post, put } from "../../shared/api-call";

export function getHeroesAction({ commit }) {
  console.log("actions.js_getHeroesAction()");
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
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.ISLOADING_HERO, false));
}

export function addHeroAction({ commit }, payload) {
  commit(types.ISLOADING_HERO, true);

  return post("heroes", payload)
    .then(({ data }) => commit(types.ADD_HERO, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.ISLOADING_HERO, false));
}

export function updateHeroAction({ commit }, payload) {
  commit(types.ISLOADING_HERO, true);

  return put("heroes", payload)
    .then(() => commit(types.UPDATE_HERO, payload))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.ISLOADING_HERO, false));
}
