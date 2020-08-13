import * as types from "./types";

const mutations = {
  [types.GET_HEROES](state, heroes) {
    console.log("mutation.js_[types.GET_HEROES]");
    state.heroes = heroes;
  },

  [types.ISLOADING_HERO](state, toggle) {
    state.isLoading = toggle;
  },

  [types.REMOVE_HERO](state, id) {
    state.heroes = state.heroes.filter((h) => h.id !== id);
  },

  [types.ADD_HERO](state, heroData) {
    state.heroes.push(heroData);
  },

  [types.UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex((h) => h.id === hero.id);
    state.heroes[index] = hero;
  },
};

export default mutations;
