import { createRouter, createWebHistory } from "vue-router";
// there is also createWebHashHistory and createMemoryHistory
import Heroes from "../heroes/views/Heroes";
import Home from "../views/Home";
import { authGuard } from "../auth/authGuard";
import { isTokenFromLocalStorageValid } from "../auth/auth.service";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
        requiresAuth: false,
      },
    },
    {
      path: "/heroes",
      name: "heroes",
      component: Heroes,
      meta: {
        title: "Heroes",
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "Login",
        requiresAuth: false,
      },
      component: () => import("../auth/views/Login"),
    },
    {
      path: "/continue-as",
      name: "continue-as",
      meta: {
        title: "ContinueAs",
        requiresAuth: false,
      },
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("token")) {
          next("/");
        } else if (isTokenFromLocalStorageValid()) {
          next();
        } else {
          next(false);
        }
      },
      component: () => import("../auth/views/ContinueAs"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        title: "Register",
        requiresAuth: false,
      },
      component: () => import("../auth/views/Register"),
    },
    {
      path: "/forgot-password",
      name: "forgetPassword",
      meta: {
        title: "Forget Password",
        requiresAuth: false,
      },
      component: () => import("../auth/views/ForgotPassword"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  authGuard(to, from, next);
});

const dirLog = {
  "": "？",
  back: "⏪",
  forward: "⏩",
};

routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});
