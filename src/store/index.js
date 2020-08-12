import { createStore, createLogger } from "vuex";
import hero from "./hero";
import authModule from "./auth";

export const store = createStore({
  modules: {
    hero,
    authModule,
  },
  plugins: [createLogger()],
});
