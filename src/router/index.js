import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/home",
    name: "Home",
    redirect: "Index",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/Home"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
