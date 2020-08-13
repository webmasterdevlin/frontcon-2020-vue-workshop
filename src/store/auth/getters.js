const getters = {
  email: (state) => {
    return state.signInState.email;
  },
  isAuthenticated: (state) => {
    return state.signInState.accessToken;
  },
};
export default getters;
