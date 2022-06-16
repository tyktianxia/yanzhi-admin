import { v4 as uuidv4 } from "uuid";
import { RouteRecordRaw } from "vue-router";
export const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "ABOUT",
    component: () => import("@/views/yanzhi/about.vue"),
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/yanzhi/404.vue"),
    meta: {},
  },
];
