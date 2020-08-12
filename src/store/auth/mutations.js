import * as types from "./types";
import * as jwt from "jsonwebtoken";

const mutations = {
  [types.REGISTER_USER](state, token) {
    state.signInState.accessToken = token;

    const registerClaim = jwt.decode(token);
    claimToState(state, registerClaim);
    localStorage.setItem("token", token);
  },
};

export default mutations;

function claimToState(state, claim) {
  state.signInState.sub = claim.sub;
  state.signInState.email = claim.email;
  state.signInState.exp = claim.exp;
  state.signInState.iat = claim.iat;
}
