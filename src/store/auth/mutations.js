import * as types from "./types";
import * as jwt from "jsonwebtoken";

const mutations = {
    [types.LOGIN_USER](state, token) {
    state.signInState.accessToken = token;
    const loginClaim = jwt.decode(token);

    claimToState(state, loginClaim);
    localStorage.setItem('token', token)
  },

  [types.REGISTER_USER](state, token) {
    state.signInState.accessToken = token;
    const registerClaim = jwt.decode(token);

    claimToState(state, registerClaim);
    localStorage.setItem('token', token)
  },

  [types.LOCAL_STORAGE_TOKEN_LOG_IN](state, token) {
    state.signInState.accessToken = token;
    const loginClaim = jwt.decode(token);

    claimToState(state, loginClaim);
  }
};

export default mutations;

function claimToState(state, claim) {
  state.signInState.sub = claim.sub;
  state.signInState.email = claim.email;
  state.signInState.exp = claim.exp;
  state.signInState.iat = claim.exp;
}
