import { createStore, createLogger } from "vuex";
import hero from "./hero";

export const store = createStore({
  modules: {
    hero,
    // villain
  },
  plugins: [createLogger()],
});
