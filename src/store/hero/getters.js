const getters = {
  heroes: (state) => {
    console.log("getters.js_heroes");
    return state.heroes;
  },
  isLoading: (state) => state.isLoading,
};
export default getters;
