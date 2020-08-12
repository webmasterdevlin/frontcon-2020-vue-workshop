const { default: state } = require("./state");

const getters = {
  heroes: (state) => state.heroes,
  isLoading: (state) => state.isLoading,
};

export default getters;


// state.heroes = state.heroes.filter((h) => h.id !== id);