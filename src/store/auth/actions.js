import * as types from "./types";
import { loginUserAxios, registerUserAxios } from "../../shared/api-call";
import { getAccessToken, isTokenFromLocalStorageValid } from '../../auth/auth.service'

export function loginUserAction({ commit }, payload) {

  return loginUserAxios(payload).then(({ data }) =>
     commit(types.LOGIN_USER, data.accessToken)
  );
}

export function registerUserAction({ commit }, payload) {

  return registerUserAxios(payload).then(({ data }) =>
    commit(types.REGISTER_USER, data.accessToken)
  );
}

export function useLocalStorageTokenToSignIn({commit}) {
    if (!isTokenFromLocalStorageValid()) return;

    const token = getAccessToken();

    commit(types.LOCAL_STORAGE_TOKEN_LOG_IN, token)
}
