import { createRouter, createWebHistory } from "vue-router";

import Heroes from "../heroes/views/Heroes";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,

  routes: [
    {
      path: "/",
      redirect: { name: "heroes" },
    },
    {
      path: "/heroes",
      name: "heroes",
      component: Heroes,
    },
  ],
});
