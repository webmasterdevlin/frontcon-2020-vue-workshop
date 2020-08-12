import * as types from "./types";
import { registerUser } from "../../shared/api-call";

export function registerUserAction({ commit }, payload) {
  return registerUser(payload).then(({ data }) =>
    commit(types.REGISTER_USER, data.accessToken)
  );
}
