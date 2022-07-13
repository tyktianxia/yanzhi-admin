import { RouteRecordRaw } from "vue-router";

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "ABOUT",
    component: () => import("@/views/yanzhi/about.vue"),
    meta: {
      icon: "icon-paofu-53",
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/yanzhi/404.vue"),
    meta: {
      noMenuFlag: true,
    },
  },
];
